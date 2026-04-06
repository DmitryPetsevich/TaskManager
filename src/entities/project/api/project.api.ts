import { api } from '@shared/api/axios';
import type { ProjectDTO, UpdateProjectPayload } from '../model/types';

export const getProjects = async (signal: AbortSignal): Promise<ProjectDTO[]> => {
  const response = await api.get<ProjectDTO[]>('/projects', { signal });

  return response.data;
};

export const getProject = async (id: string, signal: AbortSignal): Promise<ProjectDTO> => {
  const response = await api.get<ProjectDTO>(`/projects/${id}`, { signal });

  return response.data;
};

export const createProject = async (project: ProjectDTO): Promise<ProjectDTO> => {
  const response = await api.post<ProjectDTO>('/projects', project);

  return response.data;
};

export const updateProject = async ({ id, data }: UpdateProjectPayload): Promise<ProjectDTO> => {
  const response = await api.patch<ProjectDTO>(`/projects/${id}`, data);

  return response.data;
};

export const deleteProject = async (id: string): Promise<ProjectDTO> => {
  const response = await api.delete(`/projects/${id}`);

  return response.data;
};
