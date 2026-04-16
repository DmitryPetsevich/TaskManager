import z from 'zod';

export const loginSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().trim().min(6, 'Password must contain at least 6 characters'),
});

export type LoginFormInput = z.input<typeof loginSchema>;
