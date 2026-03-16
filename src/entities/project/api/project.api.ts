import type { QueryFunctionContext } from '@tanstack/react-query';
import type { IProjectDto, UpdateProjectDto } from '@entities/project/model/types';
import { api } from '@shared/api/axios';

export const getProjects = async ({ signal }: QueryFunctionContext): Promise<IProjectDto[]> => {
  const response = await api.get<IProjectDto[]>('/projects', { signal });

  return response.data;
};

export const getProject = async (id: string, signal: AbortSignal): Promise<IProjectDto> => {
  const response = await api.get<IProjectDto>(`/projects/${id}`, { signal });

  return response.data;
};

export const createProject = async (project: IProjectDto): Promise<IProjectDto> => {
  const response = await api.post<IProjectDto>('/projects', project);

  return response.data;
};

export const updateProject = async ({ id, data }: UpdateProjectDto): Promise<IProjectDto> => {
  const response = await api.patch<IProjectDto>(`/projects/${id}`, data);

  return response.data;
};

export const deleteProject = async (id: string) => {
  const response = await api.delete(`/projects/${id}`);

  return response.data;
};
