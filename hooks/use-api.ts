import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { projectApi, userApi, type Project, type User } from '@/lib/api';
import { CreateProjectFormData } from '@/schemas/projects/createProject';
import { toast } from 'sonner';

// Query keys
export const queryKeys = {
  projects: ['projects'] as const,
  project: (id: number) => ['projects', id] as const,
  users: ['users'] as const,
  user: (id: number) => ['users', id] as const,
};

// Project hooks
export const useProjects = () => {
  return useQuery({
    queryKey: queryKeys.projects,
    queryFn: projectApi.getProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useProject = (id: number) => {
  return useQuery({
    queryKey: queryKeys.project(id),
    queryFn: () => projectApi.getProject(id),
    enabled: !!id,
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (projectData: CreateProjectFormData) => projectApi.createProject(projectData),
    onSuccess: (newProject) => {
      // Invalidate and refetch projects
      queryClient.invalidateQueries({ queryKey: queryKeys.projects });
      
      // Optionally add the new project to the cache
      queryClient.setQueryData(queryKeys.projects, (oldData: Project[] | undefined) => {
        if (oldData) {
          return [newProject, ...oldData];
        }
        return [newProject];
      });

      toast.success('Project created successfully!');
    },
    onError: (error: any) => {
      console.error('Failed to create project:', error);
      toast.error(error?.response?.data?.error || 'Failed to create project');
    },
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<CreateProjectFormData> }) =>
      projectApi.updateProject(id, data),
    onSuccess: (updatedProject) => {
      // Update the specific project in cache
      queryClient.setQueryData(queryKeys.project(updatedProject.id), updatedProject);
      
      // Update the project in the projects list
      queryClient.setQueryData(queryKeys.projects, (oldData: Project[] | undefined) => {
        if (oldData) {
          return oldData.map((project) =>
            project.id === updatedProject.id ? updatedProject : project
          );
        }
        return [updatedProject];
      });

      toast.success('Project updated successfully!');
    },
    onError: (error: any) => {
      console.error('Failed to update project:', error);
      toast.error(error?.response?.data?.error || 'Failed to update project');
    },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => projectApi.deleteProject(id),
    onSuccess: (_, deletedId) => {
      // Remove the project from cache
      queryClient.setQueryData(queryKeys.projects, (oldData: Project[] | undefined) => {
        if (oldData) {
          return oldData.filter((project) => project.id !== deletedId);
        }
        return [];
      });

      toast.success('Project deleted successfully!');
    },
    onError: (error: any) => {
      console.error('Failed to delete project:', error);
      toast.error(error?.response?.data?.error || 'Failed to delete project');
    },
  });
};

// User hooks
export const useUsers = () => {
  return useQuery({
    queryKey: queryKeys.users,
    queryFn: userApi.getUsers,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData: any) => userApi.createUser(userData),
    onSuccess: (newUser) => {
      // Invalidate and refetch users
      queryClient.invalidateQueries({ queryKey: queryKeys.users });
      
      // Optionally add the new user to the cache
      queryClient.setQueryData(queryKeys.users, (oldData: User[] | undefined) => {
        if (oldData) {
          return [newUser, ...oldData];
        }
        return [newUser];
      });

      toast.success('User created successfully!');
    },
    onError: (error: any) => {
      console.error('Failed to create user:', error);
      toast.error(error?.response?.data?.error || 'Failed to create user');
    },
  });
};
