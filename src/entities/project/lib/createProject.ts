import type { IProjectDto } from '@entities/project/model/types';
import type { ProjectFormValues } from '@entities/project/model/schema';

export const createProject = (data: ProjectFormValues): IProjectDto => ({
  id: crypto.randomUUID(),
  createdAt: new Date().toISOString(),
  name: data.name,
  status: 'In Progress',
});
