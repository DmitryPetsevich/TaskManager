import { z } from 'zod';

export const projectSchema = z.object({
  name: z.string().trim().min(3, 'Project name must contain at least 3 characters'),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;
