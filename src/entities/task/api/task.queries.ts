import { queryOptions } from '@tanstack/react-query';
import { getTasksByProjectId } from '@entities/task/api/task.api';
import { taskKeys } from '@entities/task/lib/queryKeys';
import { groupAndSort } from '@entities/task/lib/graph/groupAndSort';

export const taskQueries = {
  tasksByProjectId: (projectId: string) =>
    queryOptions({
      queryKey: taskKeys.projectTasks(projectId!),
      queryFn: ({ signal }) => getTasksByProjectId(projectId, signal),
      select: (tasks) => groupAndSort(tasks),
    }),
};
