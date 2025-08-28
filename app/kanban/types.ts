export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  type: 'learning' | 'custom' | 'startup';
}

export interface Column {
  id: number;
  name: string;
  isDone: boolean;
  tasks: Task[];
}

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  order: number;
  createdAt: string;
  createdBy: User;
  assignedTo: User;
  columnId: number;
  projectId: number;
  subtasks: Subtask[];
  comments: Comment[];
  attachments: Attachment[];
  steps: Step[];
  pomodoroTimer: PomodoroTimer;
}

export interface PomodoroTimer {
  id: number;
  taskId: number;
  totalTimeSpent: number; // Total minutes spent on this task
  sessions: PomodoroSession[];
  isActive: boolean;
  currentSessionId?: number;
  settings: PomodoroSettings;
}

export interface PomodoroSession {
  id: number;
  type: 'work' | 'shortBreak' | 'longBreak';
  duration: number; // Duration in minutes
  timeRemaining: number; // Time remaining in seconds
  startTime?: string;
  endTime?: string;
  completed: boolean;
  isActive: boolean;
}

export interface PomodoroSettings {
  workDuration: number; // Default: 25 minutes
  shortBreakDuration: number; // Default: 5 minutes
  longBreakDuration: number; // Default: 15 minutes
  sessionsUntilLongBreak: number; // Default: 4
}

export interface Subtask {
  id: number;
  title: string;
  done: boolean;
  createdBy: User;
  assignedTo?: User;
  createdAt: string;
}

export interface Comment {
  id: number;
  author: User;
  content: string;
  createdAt: string;
}

export interface Attachment {
  id: number;
  title: string;
  description: string;
  url?: string;
  file?: File;
  fileName?: string;
  fileSize?: number;
  fileType?: string;
  resourceType: 'document' | 'image' | 'video' | 'audio' | 'link' | 'archive' | 'code' | 'other';
  uploadedAt: string;
  uploadedBy: User;
}

export interface Step {
  id: number;
  order: number;
  title: string;
  description?: string;
  completed: boolean;
  linkedResourceIds?: number[]; // Array of attachment IDs linked to this step
}

export interface DragItem {
  type: string;
  id: number;
  columnId: number;
}

export interface NewTaskForm {
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
}

export interface NewColumnForm {
  name: string;
}