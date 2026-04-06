import { api } from '@shared/api/axios';
import type { TaskDTO, UpdateTaskPayload } from '../model/types';

export const getTasksByProjectId = async (
  projectId: string,
  signal: AbortSignal,
): Promise<TaskDTO[]> => {
  const response = await api.get<TaskDTO[]>('/tasks', { params: { projectId }, signal });

  return response.data;
};

export const createTask = async (task: TaskDTO): Promise<TaskDTO> => {
  const response = await api.post<TaskDTO>('/tasks', task);

  return response.data;
};

export const updateTask = async ({ id, data }: UpdateTaskPayload): Promise<TaskDTO> => {
  const response = await api.patch<TaskDTO>(`/tasks/${id}`, data);

  return response.data;
};

export const deleteTask = async (id: string) => {
  const response = await api.delete(`/tasks/${id}`);

  return response.data;
};
