import { api } from '@shared/api/axios';
import type { ITaskDto, UpdatedTaskDto } from '@entities/task/model/types';

export const getTasksByProjectId = async (
  projectId: string,
  signal: AbortSignal,
): Promise<ITaskDto[]> => {
  const response = await api.get<ITaskDto[]>('/tasks', { params: { projectId }, signal });

  return response.data;
};

export const createTask = async (task: ITaskDto): Promise<ITaskDto> => {
  const response = await api.post<ITaskDto>('/tasks', task);

  return response.data;
};

export const updateTask = async ({ id, data }: UpdatedTaskDto): Promise<ITaskDto> => {
  const response = await api.patch<ITaskDto>(`/tasks/${id}`, data);

  return response.data;
};

export const deleteTask = async (task: ITaskDto) => {
  const response = await api.delete(`/tasks/${task.id}`);

  return response.data;
};
