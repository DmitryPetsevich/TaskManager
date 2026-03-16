export type ProjectStatus = 'In Progress' | 'Paused' | 'Done';

export interface IProjectDto {
  id: string;
  createdAt: string;
  status: ProjectStatus;
  name: string;
}

export interface UpdateProjectDto {
  id: string;
  data: Partial<IProjectDto>;
}
