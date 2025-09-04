import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { API_CONFIG, ERROR_MESSAGES } from './constants';

// Configure axios instance with optimizations
const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for authentication (when implemented)
api.interceptors.request.use(
  (config) => {
    // Add auth token when available
    // const token = getAuthToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const message = getErrorMessage(error);
    console.error('API Error:', message, error);
    return Promise.reject(new Error(message));
  }
);

// Error message helper
function getErrorMessage(error: AxiosError): string {
  if (!error.response) {
    return ERROR_MESSAGES.NETWORK;
  }

  switch (error.response.status) {
    case 400:
      return (error.response.data as any)?.error || ERROR_MESSAGES.VALIDATION;
    case 401:
      return ERROR_MESSAGES.UNAUTHORIZED;
    case 403:
      return ERROR_MESSAGES.FORBIDDEN;
    case 404:
      return ERROR_MESSAGES.NOT_FOUND;
    case 500:
      return ERROR_MESSAGES.SERVER_ERROR;
    default:
      return (error.response.data as any)?.error || ERROR_MESSAGES.UNKNOWN;
  }
}

// Generic API response types
export interface ApiResponse<T> {
  data: T;
  status: number;
}

export interface ApiError {
  error: string;
  status: number;
  details?: any;
}

// Generic API functions
export const apiRequest = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await api.get<ApiResponse<T>>(url, config);
    return response.data.data;
  },

  post: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    const response = await api.post<ApiResponse<T>>(url, data, config);
    return response.data.data;
  },

  put: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    const response = await api.put<ApiResponse<T>>(url, data, config);
    return response.data.data;
  },

  patch: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    const response = await api.patch<ApiResponse<T>>(url, data, config);
    return response.data.data;
  },

  delete: async <T = void>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await api.delete(url, config);
    return response.data?.data;
  },
};

export default api;
