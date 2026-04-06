import type { TaskDTO, TaskFormInput } from '@entities/task';

export const createTaskData = (projectId: string, data: TaskFormInput): TaskDTO => {
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
