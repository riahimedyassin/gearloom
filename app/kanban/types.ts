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
  assignedTo: User;
  columnId: number;
  projectId: number;
  subtasks: Subtask[];
  comments: Comment[];
}

export interface Subtask {
  id: number;
  title: string;
  done: boolean;
}

export interface Comment {
  id: number;
  author: User;
  content: string;
  createdAt: string;
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