import type { ITaskDto } from '@entities/task/model/types';
import type { TaskFormValues } from '@entities/task/model/schema';

export const createTask = (projectId: string, data: TaskFormValues): ITaskDto => {
  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    projectId,
    name: data.name,
    createdAt: now,
    updatedAt: now,
    dependOn: [],
    status: data.status,
    priority: data.priority,
  };
};
