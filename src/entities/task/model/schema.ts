import z from 'zod';
import { TASK_PRIORITIES, TASK_STATUSES } from './constants';

export const schema = z.object({
  name: z.string().trim().min(3, 'Task name must contain at least 3 characters'),
  status: z.enum(TASK_STATUSES),
  priority: z.enum(TASK_PRIORITIES),
  dependOn: z.array(z.string()).default([]),
});

export type TaskFormSchema = typeof schema;

export type TaskFormInput = z.input<typeof schema>;
