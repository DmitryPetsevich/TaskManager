import type { TaskDTO } from '../model/types';
import type { TaskFormInput } from '../model/schema';

export const createTaskEntity = (projectId: string, data: TaskFormInput): TaskDTO => {
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
