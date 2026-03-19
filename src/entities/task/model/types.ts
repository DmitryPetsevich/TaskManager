import type { TASK_PRIORITIES, TASK_STATUSES } from '@entities/task/model/constants';

export type TaskStatus = (typeof TASK_STATUSES)[number];
export type TaskPriority = (typeof TASK_PRIORITIES)[number];

export interface ITaskDto {
  id: string;
  projectId: string;
  name: string;
  status: TaskStatus;
  priority: TaskPriority;
  dependOn: string[];
  createdAt: string;
  updatedAt: string;
}

export interface UpdatedTaskDto {
  id: string;
  data: Partial<ITaskDto>;
}
