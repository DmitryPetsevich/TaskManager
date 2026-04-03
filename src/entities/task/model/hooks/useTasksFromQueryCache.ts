import { useQueryClient } from '@tanstack/react-query';
import { taskKeys } from '@entities/task/lib/queryKeys';
import type { ITaskDto } from '@entities/task/model/types';

export function useTasksFromQueryCache(projectId: string) {
  const client = useQueryClient();
  const queryKey = taskKeys.projectTasks(projectId);

  const tasks = client.getQueryData<ITaskDto[]>(queryKey) || [];

  return tasks;
}
