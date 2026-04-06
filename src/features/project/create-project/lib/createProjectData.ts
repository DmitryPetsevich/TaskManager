import type { ProjectDTO, ProjectFormInput } from '@entities/project';

export const createProjectData = (data: ProjectFormInput): ProjectDTO => ({
  id: crypto.randomUUID(),
  createdAt: new Date().toISOString(),
  name: data.name,
  status: 'In Progress',
});
