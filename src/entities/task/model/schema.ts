import z from 'zod';
import { TASK_PRIORITIES, TASK_STATUSES } from '@entities/task/model/constants';

export const taskSchema = z.object({
  name: z.string().trim().min(3, 'Task name must contain at least 3 characters'),
  status: z.enum(TASK_STATUSES),
  priority: z.enum(TASK_PRIORITIES),
});

export type TaskFormValues = z.infer<typeof taskSchema>;
