"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Project } from "./project-context";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done" | "blocked";
  priority: "low" | "medium" | "high" | "critical";
  projectId: string;
  assignee: string;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  tags?: string[];
  timeEstimate?: number; // in hours
  timeSpent?: number; // in hours
}

interface TaskContextType {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  getTasksByProject: (projectId: string) => Task[];
  addTask: (task: Omit<Task, "id" | "createdAt" | "updatedAt">) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  deleteTask: (taskId: string) => void;
  moveTask: (taskId: string, newStatus: Task["status"]) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Mock task data with different tasks for each project
const defaultTasks: Task[] = [
  // GearLoom Task Manager (Web Development) - Project ID: 1
  {
    id: "task-1-1",
    title: "Set up React components library",
    description: "Create reusable components for the application",
    status: "todo",
    priority: "high",
    projectId: "1",
    assignee: "John Doe",
    dueDate: "2025-09-08",
    createdAt: "2025-09-01",
    updatedAt: "2025-09-01",
    tags: ["frontend", "react"],
    timeEstimate: 16,
    timeSpent: 0
  },
  {
    id: "task-1-2",
    title: "Implement user authentication",
    description: "Add login/logout functionality with JWT tokens",
    status: "in-progress",
    priority: "critical",
    projectId: "1",
    assignee: "Sarah Smith",
    dueDate: "2025-09-05",
    createdAt: "2025-08-28",
    updatedAt: "2025-09-02",
    tags: ["backend", "auth"],
    timeEstimate: 20,
    timeSpent: 8
  },
  {
    id: "task-1-3",
    title: "Design database schema",
    description: "Plan the database structure for tasks and users",
    status: "done",
    priority: "medium",
    projectId: "1",
    assignee: "Mike Johnson",
    dueDate: "2025-09-01",
    createdAt: "2025-08-25",
    updatedAt: "2025-08-31",
    tags: ["database", "design"],
    timeEstimate: 8,
    timeSpent: 6
  },
  {
    id: "task-1-4",
    title: "Create API endpoints",
    description: "Build REST API for task management",
    status: "todo",
    priority: "high",
    projectId: "1",
    assignee: "Emma Wilson",
    dueDate: "2025-09-10",
    createdAt: "2025-09-01",
    updatedAt: "2025-09-01",
    tags: ["backend", "api"],
    timeEstimate: 24,
    timeSpent: 0
  },

  // Startup MVP - Project ID: 2
  {
    id: "task-2-1",
    title: "Conduct market research analysis",
    description: "Research target market and competitors",
    status: "todo",
    priority: "high",
    projectId: "2",
    assignee: "Lisa Chen",
    dueDate: "2025-09-12",
    createdAt: "2025-09-01",
    updatedAt: "2025-09-01",
    tags: ["research", "market"],
    timeEstimate: 40,
    timeSpent: 0
  },
  {
    id: "task-2-2",
    title: "Prepare investor pitch deck",
    description: "Create compelling presentation for Series A",
    status: "in-progress",
    priority: "critical",
    projectId: "2",
    assignee: "David Park",
    dueDate: "2025-09-06",
    createdAt: "2025-08-28",
    updatedAt: "2025-09-02",
    tags: ["funding", "presentation"],
    timeEstimate: 30,
    timeSpent: 15
  },
  {
    id: "task-2-3",
    title: "Define business model canvas",
    description: "Create detailed business model documentation",
    status: "done",
    priority: "high",
    projectId: "2",
    assignee: "Emma Davis",
    dueDate: "2025-08-30",
    createdAt: "2025-08-20",
    updatedAt: "2025-08-30",
    tags: ["business", "strategy"],
    timeEstimate: 16,
    timeSpent: 18
  },

  // Learn React Advanced - Project ID: 3
  {
    id: "task-3-1",
    title: "Complete React hooks deep dive",
    description: "Study advanced hooks patterns and custom hooks",
    status: "todo",
    priority: "medium",
    projectId: "3",
    assignee: "You",
    dueDate: "2025-09-15",
    createdAt: "2025-09-01",
    updatedAt: "2025-09-01",
    tags: ["learning", "react", "hooks"],
    timeEstimate: 12,
    timeSpent: 0
  },
  {
    id: "task-3-2",
    title: "Build practice project with Context API",
    description: "Create a shopping cart app using Context and Reducer",
    status: "in-progress",
    priority: "medium",
    projectId: "3",
    assignee: "You",
    dueDate: "2025-09-20",
    createdAt: "2025-09-01",
    updatedAt: "2025-09-03",
    tags: ["learning", "project", "context"],
    timeEstimate: 20,
    timeSpent: 5
  },
  {
    id: "task-3-3",
    title: "Read React documentation on suspense",
    description: "Understand concurrent features and suspense",
    status: "done",
    priority: "low",
    projectId: "3",
    assignee: "You",
    dueDate: "2025-08-29",
    createdAt: "2025-08-25",
    updatedAt: "2025-08-29",
    tags: ["learning", "docs"],
    timeEstimate: 4,
    timeSpent: 3
  },

  // Mobile App Project - Project ID: 4
  {
    id: "task-4-1",
    title: "Design app wireframes and mockups",
    description: "Create UI/UX designs for the mobile application",
    status: "todo",
    priority: "high",
    projectId: "4",
    assignee: "Alex Rivera",
    dueDate: "2025-09-18",
    createdAt: "2025-09-01",
    updatedAt: "2025-09-01",
    tags: ["design", "wireframes"],
    timeEstimate: 24,
    timeSpent: 0
  },
  {
    id: "task-4-2",
    title: "Set up React Native development environment",
    description: "Configure tooling and initial project structure",
    status: "in-progress",
    priority: "medium",
    projectId: "4",
    assignee: "Jordan Kim",
    dueDate: "2025-09-08",
    createdAt: "2025-09-01",
    updatedAt: "2025-09-03",
    tags: ["setup", "react-native"],
    timeEstimate: 8,
    timeSpent: 4
  },

  // Data Analytics Pipeline - Project ID: 5
  {
    id: "task-5-1",
    title: "Data collection and cleaning pipeline",
    description: "Set up ETL process for customer data",
    status: "todo",
    priority: "high",
    projectId: "5",
    assignee: "Taylor Brown",
    dueDate: "2025-09-25",
    createdAt: "2025-09-01",
    updatedAt: "2025-09-01",
    tags: ["data", "etl"],
    timeEstimate: 32,
    timeSpent: 0
  },
  {
    id: "task-5-2",
    title: "Exploratory data analysis",
    description: "Analyze patterns and insights in customer data",
    status: "in-progress",
    priority: "medium",
    projectId: "5",
    assignee: "Casey Martinez",
    dueDate: "2025-09-30",
    createdAt: "2025-09-01",
    updatedAt: "2025-09-03",
    tags: ["analysis", "visualization"],
    timeEstimate: 20,
    timeSpent: 6
  }
];

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("gearloom-tasks");
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error("Error loading tasks from localStorage:", error);
      }
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("gearloom-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const getTasksByProject = (projectId: string): Task[] => {
    const filteredTasks = tasks.filter(task => task.projectId === projectId);
    console.log(`Getting tasks for project ${projectId}:`, filteredTasks.length, "tasks found");
    return filteredTasks;
  };

  const addTask = (taskData: Omit<Task, "id" | "createdAt" | "updatedAt">) => {
    const newTask: Task = {
      ...taskData,
      id: `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTasks(prev => [...prev, newTask]);
  };

  const updateTask = (taskId: string, updates: Partial<Task>) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId
          ? { ...task, ...updates, updatedAt: new Date().toISOString() }
          : task
      )
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const moveTask = (taskId: string, newStatus: Task["status"]) => {
    updateTask(taskId, { status: newStatus });
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      setTasks,
      getTasksByProject,
      addTask,
      updateTask,
      deleteTask,
      moveTask,
    }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
}
