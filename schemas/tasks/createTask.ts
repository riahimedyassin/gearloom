import z from "zod";

export const CreateTaskSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
});
