import { z } from 'zod';

export const schema = z.object({
  name: z.string().trim().min(3, 'Project name must contain at least 3 characters'),
});

export type ProjectFormSchema = typeof schema;

export type ProjectFormInput = z.input<typeof schema>;
