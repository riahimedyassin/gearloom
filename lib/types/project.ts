import { CreateProjectFormData } from '@/schemas/projects/createProject';

// Project base interface
export interface Project {
  id: number;
  name: string;
  description: string;
  type: ProjectType;
  category: ProjectCategory;
  priority: ProjectPriority;
  status: ProjectStatus;
  targetAudience?: string;
  timeline?: string;
  context?: string;
  goals?: string[];
  challenges?: string[];
  techStack?: string[];
  keywords?: string[];
  milestones?: ProjectMilestone[];
  resources?: ProjectResources;
  createdAt: string;
  updatedAt: string;
  startDate?: string;
  endDate?: string;
  ownerId: number;
  owner: ProjectOwner;
  _count?: ProjectCounts;
}

// Project related types
export type ProjectType = 
  | 'web_development'
  | 'mobile_app'
  | 'desktop_app'
  | 'api_backend'
  | 'data_science'
  | 'machine_learning'
  | 'research'
  | 'marketing'
  | 'design'
  | 'business'
  | 'education'
  | 'personal'
  | 'startup'
  | 'learning'
  | 'custom'
  | 'other';

export type ProjectCategory = 
  | 'startup'
  | 'enterprise'
  | 'personal'
  | 'freelance'
  | 'open_source'
  | 'academic'
  | 'non_profit';

export type ProjectPriority = 'low' | 'medium' | 'high' | 'critical';

export type ProjectStatus = 'planning' | 'active' | 'on_hold' | 'completed' | 'archived';

export interface ProjectOwner {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

export interface ProjectMilestone {
  title: string;
  description?: string;
  dueDate?: string;
  completed?: boolean;
}

export interface ProjectResources {
  budget?: 'none' | 'low' | 'medium' | 'high' | 'enterprise';
  tools?: string[];
  references?: string[];
}

export interface ProjectCounts {
  tasks: number;
  members: number;
  columns: number;
}

// Project filters and sorting
export interface ProjectFilters {
  type?: ProjectType;
  category?: ProjectCategory;
  priority?: ProjectPriority;
  status?: ProjectStatus;
  ownerId?: number;
  search?: string;
}

export interface ProjectSortOptions {
  field: 'name' | 'createdAt' | 'updatedAt' | 'priority' | 'status';
  direction: 'asc' | 'desc';
}

// Project form data
export type ProjectCreateData = CreateProjectFormData;
export type ProjectUpdateData = Partial<CreateProjectFormData>;

// Project statistics
export interface ProjectStats {
  total: number;
  byStatus: Record<ProjectStatus, number>;
  byPriority: Record<ProjectPriority, number>;
  byType: Record<ProjectType, number>;
  recentlyCreated: number;
  recentlyUpdated: number;
}
