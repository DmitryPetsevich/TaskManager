import type { IProjectDto } from '@entities/project/project.types';
import { api } from '@shared/api/axios';

export const getProjects = async (): Promise<IProjectDto[]> => {
  const response = await api.get<IProjectDto[]>('/projects');

  return response.data;
};
