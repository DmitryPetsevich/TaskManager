import type { TASK_PRIORITIES, TASK_STATUSES } from './constants';

type TaskStatus = (typeof TASK_STATUSES)[number];
type TaskPriority = (typeof TASK_PRIORITIES)[number];

// NOTE: json-server requires full entity so I use only DTO-model
export type TaskDTO = {
  id: string;
  projectId: string;
  name: string;
  status: TaskStatus;
  priority: TaskPriority;
  dependOn: string[];
  createdAt: string;
  updatedAt: string;
};

export type UpdateTaskPayload = {
  id: string;
  data: Partial<TaskDTO>;
};
