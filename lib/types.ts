import {
  User,
  Project,
  ProjectMember,
  Column,
  Task,
  SubTask,
  TaskStep,
  Comment,
  TaskAttachment,
  PomodoroSettings,
  PomodoroSession,
  Pomorounds,
  Label,
  TaskLabel,
  Notification,
  UserRole,
  ProjectType,
  ProjectCategory,
  ProjectPriority,
  ProjectStatus,
  MemberRole,
  TaskPriority,
  TaskStatus,
  AttachmentType,
  SessionType,
  SessionStatus,
  NotificationType,
} from "@prisma/client";

// Re-export Prisma types for use throughout the application
export type {
  User,
  Project,
  ProjectMember,
  Column,
  Task,
  SubTask,
  TaskStep,
  Comment,
  TaskAttachment,
  PomodoroSettings,
  PomodoroSession,
  Pomorounds,
  Label,
  TaskLabel,
  Notification,
  UserRole,
  ProjectType,
  ProjectCategory,
  ProjectPriority,
  ProjectStatus,
  MemberRole,
  TaskPriority,
  TaskStatus,
  AttachmentType,
  SessionType,
  SessionStatus,
  NotificationType,
} from "@prisma/client";

// Extended types with relations
export type UserWithRelations = User & {
  ownedProjects?: Project[];
  projectMembers?: (ProjectMember & {
    project: Project;
  })[];
  createdTasks?: Task[];
  assignedTasks?: Task[];
  comments?: Comment[];
  sessions?: PomodoroSession[];
  notifications?: Notification[];
};

export type ProjectWithRelations = Project & {
  owner: User;
  members?: (ProjectMember & {
    user: User;
  })[];
  tasks?: Task[];
  columns?: (Column & {
    tasks?: Task[];
  })[];
  labels?: Label[];
  notifications?: Notification[];
};

export type TaskWithRelations = Task & {
  project: Project;
  column: Column;
  createdBy: User;
  assignedTo?: User;
  subTasks?: SubTask[];
  comments?: (Comment & {
    createdBy: User;
  })[];
  attachments?: (TaskAttachment & {
    uploadedBy: User;
  })[];
  labels?: (TaskLabel & {
    label: Label;
  })[];
  steps?: TaskStep[];
  sessions?: PomodoroSession[];
};

export type ColumnWithTasks = Column & {
  tasks: TaskWithRelations[];
};

export type ProjectWithColumnsAndTasks = Project & {
  columns: ColumnWithTasks[];
  members: (ProjectMember & {
    user: User;
  })[];
  labels: Label[];
};

export type NotificationWithProject = Notification & {
  project?: Project;
  user: User;
};

export type PomodoroSessionWithRelations = PomodoroSession & {
  user: User;
  task?: Task;
  settings?: PomodoroSettings;
};

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T = unknown> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Dashboard analytics types
export interface ProjectAnalytics {
  totalTasks: number;
  completedTasks: number;
  inProgressTasks: number;
  overdueTasks: number;
  averageCompletionTime: number;
  tasksCompletedThisWeek: number;
  pomodoroSessionsToday: number;
  productivityScore: number;
}

export interface TeamAnalytics {
  totalMembers: number;
  activeMembersToday: number;
  tasksAssignedThisWeek: number;
  averageTasksPerMember: number;
  collaborationScore: number;
}

// Filter and sort types
export interface TaskFilters {
  status?: TaskStatus[];
  priority?: TaskPriority[];
  assignedToId?: number;
  columnId?: number;
  labelIds?: number[];
  dueDateFrom?: Date;
  dueDateTo?: Date;
  search?: string;
}

export interface ProjectFilters {
  type?: ProjectType[];
  category?: ProjectCategory[];
  status?: ProjectStatus[];
  priority?: ProjectPriority[];
  ownerId?: number;
  search?: string;
}

export type SortDirection = "asc" | "desc";

export interface SortConfig {
  field: string;
  direction: SortDirection;
}
