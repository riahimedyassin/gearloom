import { z } from "zod";

// Schema for creating columns
export const CreateColumnSchema = z.object({
  name: z
    .string()
    .min(1, "Column name is required")
    .max(50, "Column name must be less than 50 characters"),
  
  isDone: z.boolean().default(false),
  
  order: z.number().min(0).default(0),
  
  color: z
    .string()
    .regex(/^#[0-9A-F]{6}$/i, "Invalid color format")
    .optional(),
  
  projectId: z.number().min(1, "Project ID is required"),
});

export type CreateColumnFormData = z.infer<typeof CreateColumnSchema>;

// Schema for updating columns
export const UpdateColumnSchema = CreateColumnSchema.partial().extend({
  id: z.number().min(1, "Column ID is required"),
});

export type UpdateColumnFormData = z.infer<typeof UpdateColumnSchema>;

// Schema for reordering columns
export const ReorderColumnsSchema = z.object({
  projectId: z.number().min(1, "Project ID is required"),
  columnOrders: z.array(z.object({
    id: z.number().min(1),
    order: z.number().min(0),
  })).min(1, "At least one column order is required"),
});

export type ReorderColumnsFormData = z.infer<typeof ReorderColumnsSchema>;
