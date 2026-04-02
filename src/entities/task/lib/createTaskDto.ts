import type { ITaskDto } from '@entities/task/model/types';
import type { TaskFormValues } from '@entities/task/model/schema';

export const createTaskDto = (projectId: string, data: TaskFormValues): ITaskDto => {
  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    projectId,
    name: data.name,
    createdAt: now,
    updatedAt: now,
    dependOn: data.dependOn || [],
    status: data.status,
    priority: data.priority,
  };
};
