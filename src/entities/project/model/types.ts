export type ProjectStatus = 'In Progress' | 'Paused' | 'Done';

// NOTE: json-server requires full entity so I use only DTO-model
export type ProjectDTO = {
  id: string;
  createdAt: string;
  status: ProjectStatus;
  name: string;
};

export type UpdateProjectPayload = {
  id: string;
  data: Partial<Pick<ProjectDTO, 'name' | 'status'>>;
};
