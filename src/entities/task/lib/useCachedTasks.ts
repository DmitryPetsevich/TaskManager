import { useQueryClient } from '@tanstack/react-query';
import { taskQueryKeys } from './queryKeys';
import type { TaskDTO } from '../model/types';

export function useCachedTasks(projectId: string) {
  const client = useQueryClient();
  const queryKey = taskQueryKeys.projectTasks(projectId);

  const tasks = client.getQueryData<TaskDTO[]>(queryKey) || [];

  return tasks;
}
