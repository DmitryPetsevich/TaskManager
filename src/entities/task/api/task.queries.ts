import { queryOptions } from '@tanstack/react-query';
import { taskQueryKeys } from '../lib/queryKeys';
import { getTasksByProjectId } from '../api/task.api';
import { groupAndSort } from '../lib/graph/groupAndSort';

export const taskQueries = {
  tasksByProjectId: (projectId: string) =>
    queryOptions({
      queryKey: taskQueryKeys.projectTasks(projectId),
      queryFn: ({ signal }) => getTasksByProjectId(projectId, signal),
      select: (tasks) => groupAndSort(tasks),
    }),
};
