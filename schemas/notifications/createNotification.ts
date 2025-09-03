import { z } from "zod";

// Schema for creating notifications
export const CreateNotificationSchema = z.object({
  type: z.enum([
    "TASK_ASSIGNED",
    "TASK_UPDATED", 
    "TASK_COMPLETED",
    "TASK_DUE_SOON",
    "PROJECT_UPDATED",
    "MEMBER_ADDED",
    "COMMENT_ADDED",
    "POMODORO_COMPLETED",
    "SYSTEM_ANNOUNCEMENT",
  ]),
  
  title: z
    .string()
    .min(1, "Notification title is required")
    .max(100, "Title must be less than 100 characters"),
  
  message: z
    .string()
    .min(1, "Notification message is required")
    .max(500, "Message must be less than 500 characters"),
  
  userId: z.number().min(1, "User ID is required"),
  
  projectId: z.number().min(1).optional(),
  
  metadata: z.record(z.string(), z.unknown()).optional(), // Flexible metadata object
});

export type CreateNotificationFormData = z.infer<typeof CreateNotificationSchema>;

// Schema for updating notification read status
export const UpdateNotificationSchema = z.object({
  id: z.number().min(1, "Notification ID is required"),
  read: z.boolean(),
});

export type UpdateNotificationFormData = z.infer<typeof UpdateNotificationSchema>;

// Schema for bulk notification operations
export const BulkNotificationSchema = z.object({
  userId: z.number().min(1, "User ID is required"),
  notificationIds: z.array(z.number().min(1)).optional(),
  action: z.enum(["mark_read", "mark_unread", "delete"]),
});

export type BulkNotificationFormData = z.infer<typeof BulkNotificationSchema>;
