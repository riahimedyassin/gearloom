// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || '',
  TIMEOUT: 10000, // 10 seconds
  RETRY_ATTEMPTS: 3,
} as const;

// Cache Configuration
export const CACHE_CONFIG = {
  STALE_TIME: {
    SHORT: 2 * 60 * 1000,    // 2 minutes
    MEDIUM: 5 * 60 * 1000,   // 5 minutes  
    LONG: 10 * 60 * 1000,    // 10 minutes
    VERY_LONG: 30 * 60 * 1000, // 30 minutes
  },
  GC_TIME: {
    SHORT: 5 * 60 * 1000,    // 5 minutes
    MEDIUM: 10 * 60 * 1000,  // 10 minutes
    LONG: 30 * 60 * 1000,    // 30 minutes
  },
} as const;

// Query Keys Factory
export const QUERY_KEYS = {
  // Projects
  PROJECTS: {
    all: () => ['projects'] as const,
    lists: () => [...QUERY_KEYS.PROJECTS.all(), 'list'] as const,
    list: (filters?: Record<string, any>) => [...QUERY_KEYS.PROJECTS.lists(), filters] as const,
    details: () => [...QUERY_KEYS.PROJECTS.all(), 'detail'] as const,
    detail: (id: number) => [...QUERY_KEYS.PROJECTS.details(), id] as const,
    stats: () => [...QUERY_KEYS.PROJECTS.all(), 'stats'] as const,
  },
  
  // Users
  USERS: {
    all: () => ['users'] as const,
    lists: () => [...QUERY_KEYS.USERS.all(), 'list'] as const,
    list: (filters?: Record<string, any>) => [...QUERY_KEYS.USERS.lists(), filters] as const,
    details: () => [...QUERY_KEYS.USERS.all(), 'detail'] as const,
    detail: (id: number) => [...QUERY_KEYS.USERS.details(), id] as const,
    profile: (id: number) => [...QUERY_KEYS.USERS.all(), 'profile', id] as const,
  },
  
  // Tasks
  TASKS: {
    all: () => ['tasks'] as const,
    lists: () => [...QUERY_KEYS.TASKS.all(), 'list'] as const,
    list: (projectId?: number, filters?: Record<string, any>) => 
      [...QUERY_KEYS.TASKS.lists(), projectId, filters] as const,
    details: () => [...QUERY_KEYS.TASKS.all(), 'detail'] as const,
    detail: (id: number) => [...QUERY_KEYS.TASKS.details(), id] as const,
  },
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK: 'Network error occurred. Please check your connection.',
  TIMEOUT: 'Request timed out. Please try again.',
  UNKNOWN: 'An unexpected error occurred.',
  VALIDATION: 'Please check your input and try again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  FORBIDDEN: 'Access denied.',
  NOT_FOUND: 'Resource not found.',
  SERVER_ERROR: 'Server error occurred. Please try again later.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  PROJECT_CREATED: 'Project created successfully!',
  PROJECT_UPDATED: 'Project updated successfully!',
  PROJECT_DELETED: 'Project deleted successfully!',
  USER_CREATED: 'User created successfully!',
  USER_UPDATED: 'User updated successfully!',
  USER_DELETED: 'User deleted successfully!',
} as const;
