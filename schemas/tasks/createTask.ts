import z from "zod";

export const CreateTaskSchema = z.object({
  title: z
    .string()
    .min(1, "Task title is required")
    .max(200, "Task title must be less than 200 characters"),
  
  description: z
    .string()
    .max(1000, "Description must be less than 1000 characters")
    .optional()
    .default(""),
  
  priority: z.enum(["low", "medium", "high", "critical"]).default("medium"),
  
  status: z.enum(["todo", "in_progress", "in_review", "done", "blocked"]).default("todo"),
  
  // Time estimates in minutes
  estimatedTime: z.number().min(1).max(10080).optional(), // Max 1 week in minutes
  
  // Dates
  dueDate: z.date().optional(),
  startDate: z.date().optional(),
  
  // Required relationships
  projectId: z.number().min(1, "Project is required"),
  columnId: z.number().min(1, "Column is required"),
  assignedToId: z.number().optional(),
  
  // Optional arrays for creation
  labels: z.array(z.number()).optional(), // Label IDs
  subTasks: z.array(z.object({
    title: z.string().min(1, "Subtask title is required"),
    description: z.string().optional().default(""),
    priority: z.enum(["low", "medium", "high", "critical"]).default("medium"),
  })).optional(),
  
  steps: z.array(z.object({
    title: z.string().min(1, "Step title is required"),
    description: z.string().optional().default(""),
  })).optional(),
});

export type CreateTaskFormData = z.infer<typeof CreateTaskSchema>;

// Schema for updating tasks
export const UpdateTaskSchema = CreateTaskSchema.partial().extend({
  id: z.number().min(1, "Task ID is required"),
});

export type UpdateTaskFormData = z.infer<typeof UpdateTaskSchema>;

// Schema for creating subtasks
export const CreateSubTaskSchema = z.object({
  title: z.string().min(1, "Subtask title is required"),
  description: z.string().optional().default(""),
  priority: z.enum(["low", "medium", "high", "critical"]).default("medium"),
  taskId: z.number().min(1, "Task ID is required"),
});

export type CreateSubTaskFormData = z.infer<typeof CreateSubTaskSchema>;

// Schema for creating task steps
export const CreateTaskStepSchema = z.object({
  title: z.string().min(1, "Step title is required"),
  description: z.string().optional().default(""),
  taskId: z.number().min(1, "Task ID is required"),
});

export type CreateTaskStepFormData = z.infer<typeof CreateTaskStepSchema>;
