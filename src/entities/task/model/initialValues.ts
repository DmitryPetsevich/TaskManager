import type { TaskFormValues } from '@entities/task/model/schema';

export const createTaskInitialValues = (data?: Partial<TaskFormValues>): TaskFormValues => ({
  name: data?.name ?? '',
  status: data?.status ?? 'In Progress',
  priority: data?.priority ?? 'Medium',
  dependOn: data?.dependOn ?? [],
});
