import { apiRequest } from '@/lib/api';
import { 
  Project, 
  ProjectCreateData, 
  ProjectUpdateData, 
  ProjectFilters,
  ProjectStats 
} from '@/lib/types/project';

// API endpoints
const ENDPOINTS = {
  PROJECTS: '/api/projects',
  PROJECT_BY_ID: (id: number) => `/api/projects/${id}`,
  PROJECT_STATS: '/api/projects/stats',
} as const;

// Project API service
export const projectService = {
  /**
   * Get all projects with optional filters
   */
  getProjects: async (filters?: ProjectFilters): Promise<Project[]> => {
    const params = new URLSearchParams();
    
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          params.append(key, String(value));
        }
      });
    }
    
    const url = params.toString() ? `${ENDPOINTS.PROJECTS}?${params}` : ENDPOINTS.PROJECTS;
    return apiRequest.get<Project[]>(url);
  },

  /**
   * Get project by ID
   */
  getProject: async (id: number): Promise<Project> => {
    return apiRequest.get<Project>(ENDPOINTS.PROJECT_BY_ID(id));
  },

  /**
   * Create a new project
   */
  createProject: async (data: ProjectCreateData): Promise<Project> => {
    return apiRequest.post<Project>(ENDPOINTS.PROJECTS, data);
  },

  /**
   * Update an existing project
   */
  updateProject: async (id: number, data: ProjectUpdateData): Promise<Project> => {
    return apiRequest.put<Project>(ENDPOINTS.PROJECT_BY_ID(id), data);
  },

  /**
   * Partially update a project
   */
  patchProject: async (id: number, data: Partial<ProjectUpdateData>): Promise<Project> => {
    return apiRequest.patch<Project>(ENDPOINTS.PROJECT_BY_ID(id), data);
  },

  /**
   * Delete a project
   */
  deleteProject: async (id: number): Promise<void> => {
    return apiRequest.delete<void>(ENDPOINTS.PROJECT_BY_ID(id));
  },

  /**
   * Get project statistics
   */
  getProjectStats: async (): Promise<ProjectStats> => {
    return apiRequest.get<ProjectStats>(ENDPOINTS.PROJECT_STATS);
  },

  /**
   * Bulk update projects
   */
  bulkUpdateProjects: async (updates: Array<{ id: number; data: ProjectUpdateData }>): Promise<Project[]> => {
    return apiRequest.put<Project[]>(`${ENDPOINTS.PROJECTS}/bulk`, { updates });
  },

  /**
   * Duplicate a project
   */
  duplicateProject: async (id: number, name?: string): Promise<Project> => {
    return apiRequest.post<Project>(`${ENDPOINTS.PROJECT_BY_ID(id)}/duplicate`, { name });
  },

  /**
   * Archive/Unarchive a project
   */
  toggleArchiveProject: async (id: number): Promise<Project> => {
    return apiRequest.patch<Project>(`${ENDPOINTS.PROJECT_BY_ID(id)}/archive`);
  },
};
