import type { TaskDTO, TaskFormInput } from '@entities/task';

export const updateTaskData = (task: TaskDTO, data: TaskFormInput): TaskDTO => ({
  ...task,
  ...data,
  updatedAt: new Date().toISOString(),
});
