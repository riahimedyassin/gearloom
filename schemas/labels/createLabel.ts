import { z } from "zod";

// Schema for creating labels
export const CreateLabelSchema = z.object({
  name: z
    .string()
    .min(1, "Label name is required")
    .max(50, "Label name must be less than 50 characters"),
  
  color: z
    .string()
    .regex(/^#[0-9A-F]{6}$/i, "Invalid color format")
    .default("#3B82F6"), // Default blue color
  
  projectId: z.number().min(1, "Project ID is required"),
});

export type CreateLabelFormData = z.infer<typeof CreateLabelSchema>;

// Schema for updating labels
export const UpdateLabelSchema = CreateLabelSchema.partial().extend({
  id: z.number().min(1, "Label ID is required"),
});

export type UpdateLabelFormData = z.infer<typeof UpdateLabelSchema>;

// Predefined label colors
export const labelColors = [
  "#EF4444", // Red
  "#F97316", // Orange
  "#F59E0B", // Amber
  "#EAB308", // Yellow
  "#84CC16", // Lime
  "#22C55E", // Green
  "#10B981", // Emerald
  "#06B6D4", // Cyan
  "#3B82F6", // Blue
  "#6366F1", // Indigo
  "#8B5CF6", // Violet
  "#A855F7", // Purple
  "#EC4899", // Pink
  "#F43F5E", // Rose
  "#64748B", // Slate
  "#6B7280", // Gray
];
