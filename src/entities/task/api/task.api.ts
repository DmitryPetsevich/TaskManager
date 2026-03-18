import { api } from '@shared/api/axios';
import type { ITaskDto } from '@entities/task/model/types';

export const getTasksByProjectId = async (
  projectId: string,
  signal: AbortSignal,
): Promise<ITaskDto[]> => {
  const response = await api.get<ITaskDto[]>('/tasks', { params: { projectId }, signal });

  return response.data;
};
