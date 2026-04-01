import type { ITaskDto } from '@entities/task/model/types';
import type { TaskFormValues } from '@entities/task/model/schema';

export const createUpdatedTaskDto = (task: ITaskDto, data: TaskFormValues): ITaskDto => ({
  ...task,
  ...data,
  updatedAt: new Date().toISOString(),
});
