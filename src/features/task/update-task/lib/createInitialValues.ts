import type { TaskFormInput } from '@entities/task';

export const createInitialValues = (data: TaskFormInput): TaskFormInput => ({
  name: data.name,
  status: data.status,
  priority: data.priority,
  dependOn: data.dependOn || [],
});
