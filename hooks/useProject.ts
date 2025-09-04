import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { projectService } from '@/lib/services/project.service';
import { QUERY_KEYS, CACHE_CONFIG, SUCCESS_MESSAGES } from '@/lib/constants';
import { 
  Project, 
  ProjectCreateData, 
  ProjectUpdateData, 
  ProjectFilters 
} from '@/lib/types/project';

// Project queries
export const useProjects = (filters?: ProjectFilters) => {
  return useQuery({
    queryKey: QUERY_KEYS.PROJECTS.list(filters),
    queryFn: () => projectService.getProjects(filters),
    staleTime: CACHE_CONFIG.STALE_TIME.MEDIUM,
    gcTime: CACHE_CONFIG.GC_TIME.MEDIUM,
    refetchOnWindowFocus: false,
    retry: (failureCount, error) => {
      // Don't retry on 404 or 403 errors
      if (error.message.includes('404') || error.message.includes('403')) {
        return false;
      }
      return failureCount < 3;
    },
  });
};

export const useProject = (id: number, enabled = true) => {
  return useQuery({
    queryKey: QUERY_KEYS.PROJECTS.detail(id),
    queryFn: () => projectService.getProject(id),
    enabled: enabled && !!id,
    staleTime: CACHE_CONFIG.STALE_TIME.MEDIUM,
    gcTime: CACHE_CONFIG.GC_TIME.LONG,
    refetchOnWindowFocus: false,
    retry: (failureCount, error) => {
      if (error.message.includes('404')) {
        return false;
      }
      return failureCount < 2;
    },
  });
};

export const useProjectStats = () => {
  return useQuery({
    queryKey: QUERY_KEYS.PROJECTS.stats(),
    queryFn: projectService.getProjectStats,
    staleTime: CACHE_CONFIG.STALE_TIME.LONG,
    gcTime: CACHE_CONFIG.GC_TIME.LONG,
    refetchOnWindowFocus: false,
  });
};

// Project mutations
export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ProjectCreateData) => projectService.createProject(data),
    onSuccess: (newProject) => {
      // Invalidate projects list queries
      queryClient.invalidateQueries({ 
        queryKey: QUERY_KEYS.PROJECTS.lists(),
        exact: false 
      });
      
      // Invalidate stats
      queryClient.invalidateQueries({ 
        queryKey: QUERY_KEYS.PROJECTS.stats() 
      });

      // Optimistically add to cache if we have existing data
      queryClient.setQueryData(
        QUERY_KEYS.PROJECTS.list(),
        (oldData: Project[] | undefined) => {
          if (oldData) {
            return [newProject, ...oldData];
          }
          return [newProject];
        }
      );

      // Cache the new project
      queryClient.setQueryData(
        QUERY_KEYS.PROJECTS.detail(newProject.id),
        newProject
      );

      return newProject;
    },
    onError: (error) => {
      console.error('Failed to create project:', error);
      throw error;
    },
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: ProjectUpdateData }) => 
      projectService.updateProject(id, data),
    onSuccess: (updatedProject) => {
      // Update the specific project in cache
      queryClient.setQueryData(
        QUERY_KEYS.PROJECTS.detail(updatedProject.id),
        updatedProject
      );
      
      // Update all projects list queries
      queryClient.setQueriesData(
        { queryKey: QUERY_KEYS.PROJECTS.lists(), exact: false },
        (oldData: Project[] | undefined) => {
          if (oldData) {
            return oldData.map((project) =>
              project.id === updatedProject.id ? updatedProject : project
            );
          }
          return [updatedProject];
        }
      );

      // Invalidate stats
      queryClient.invalidateQueries({ 
        queryKey: QUERY_KEYS.PROJECTS.stats() 
      });

      return updatedProject;
    },
    onError: (error) => {
      console.error('Failed to update project:', error);
      throw error;
    },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => projectService.deleteProject(id),
    onSuccess: (_, deletedId) => {
      // Remove from all projects list queries
      queryClient.setQueriesData(
        { queryKey: QUERY_KEYS.PROJECTS.lists(), exact: false },
        (oldData: Project[] | undefined) => {
          if (oldData) {
            return oldData.filter((project) => project.id !== deletedId);
          }
          return [];
        }
      );

      // Remove the specific project from cache
      queryClient.removeQueries({ 
        queryKey: QUERY_KEYS.PROJECTS.detail(deletedId) 
      });

      // Invalidate stats
      queryClient.invalidateQueries({ 
        queryKey: QUERY_KEYS.PROJECTS.stats() 
      });
    },
    onError: (error) => {
      console.error('Failed to delete project:', error);
      throw error;
    },
  });
};

export const useDuplicateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, name }: { id: number; name?: string }) => 
      projectService.duplicateProject(id, name),
    onSuccess: (duplicatedProject) => {
      // Invalidate projects list queries
      queryClient.invalidateQueries({ 
        queryKey: QUERY_KEYS.PROJECTS.lists(),
        exact: false 
      });

      // Cache the duplicated project
      queryClient.setQueryData(
        QUERY_KEYS.PROJECTS.detail(duplicatedProject.id),
        duplicatedProject
      );

      return duplicatedProject;
    },
    onError: (error) => {
      console.error('Failed to duplicate project:', error);
      throw error;
    },
  });
};

export const useToggleArchiveProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => projectService.toggleArchiveProject(id),
    onSuccess: (updatedProject) => {
      // Update the specific project in cache
      queryClient.setQueryData(
        QUERY_KEYS.PROJECTS.detail(updatedProject.id),
        updatedProject
      );
      
      // Update all projects list queries
      queryClient.setQueriesData(
        { queryKey: QUERY_KEYS.PROJECTS.lists(), exact: false },
        (oldData: Project[] | undefined) => {
          if (oldData) {
            return oldData.map((project) =>
              project.id === updatedProject.id ? updatedProject : project
            );
          }
          return [updatedProject];
        }
      );

      return updatedProject;
    },
    onError: (error) => {
      console.error('Failed to toggle archive status:', error);
      throw error;
    },
  });
};
