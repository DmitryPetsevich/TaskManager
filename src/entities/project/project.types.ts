export type ProjectStatus = 'In Progress' | 'Done';

export interface IProjectDto {
  id: string;
  createdAt: string;
  description?: string;
  status: ProjectStatus;
  title: string;
}
