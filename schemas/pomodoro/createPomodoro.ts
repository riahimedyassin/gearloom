import { z } from "zod";

// Schema for creating Pomodoro settings
export const CreatePomodoroSettingsSchema = z.object({
  focusDuration: z
    .number()
    .min(1, "Focus duration must be at least 1 minute")
    .max(120, "Focus duration cannot exceed 120 minutes")
    .default(25),
  
  shortBreakDuration: z
    .number()
    .min(1, "Short break duration must be at least 1 minute")
    .max(30, "Short break duration cannot exceed 30 minutes")
    .default(5),
  
  longBreakDuration: z
    .number()
    .min(5, "Long break duration must be at least 5 minutes")
    .max(60, "Long break duration cannot exceed 60 minutes")
    .default(15),
  
  sessionsUntilLongBreak: z
    .number()
    .min(2, "Sessions until long break must be at least 2")
    .max(10, "Sessions until long break cannot exceed 10")
    .default(4),
  
  userId: z.number().min(1, "User ID is required"),
});

export type CreatePomodoroSettingsFormData = z.infer<typeof CreatePomodoroSettingsSchema>;

// Schema for creating Pomodoro sessions
export const CreatePomodoroSessionSchema = z.object({
  type: z.enum(["FOCUS", "SHORT_BREAK", "LONG_BREAK"]),
  
  duration: z
    .number()
    .min(1, "Duration must be at least 1 minute")
    .max(120, "Duration cannot exceed 120 minutes"),
  
  userId: z.number().min(1, "User ID is required"),
  
  taskId: z.number().min(1).optional(),
  
  settingsId: z.number().min(1).optional(),
});

export type CreatePomodoroSessionFormData = z.infer<typeof CreatePomodoroSessionSchema>;

// Schema for updating session status
export const UpdatePomodoroSessionSchema = z.object({
  id: z.number().min(1, "Session ID is required"),
  
  status: z.enum(["PENDING", "ACTIVE", "COMPLETED", "PAUSED", "CANCELLED"]),
  
  actualTime: z.number().min(0).optional(),
  
  startedAt: z.date().optional(),
  
  completedAt: z.date().optional(),
});

export type UpdatePomodoroSessionFormData = z.infer<typeof UpdatePomodoroSessionSchema>;

// Schema for starting a Pomodoro session
export const StartPomodoroSessionSchema = z.object({
  userId: z.number().min(1, "User ID is required"),
  
  taskId: z.number().min(1).optional(),
  
  type: z.enum(["FOCUS", "SHORT_BREAK", "LONG_BREAK"]).default("FOCUS"),
});

export type StartPomodoroSessionFormData = z.infer<typeof StartPomodoroSessionSchema>;
