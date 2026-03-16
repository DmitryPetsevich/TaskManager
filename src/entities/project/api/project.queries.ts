import { queryOptions } from '@tanstack/react-query';
import { getProject, getProjects } from '@entities/project/api/project.api';
import { projectKeys } from '@entities/project/lib/queryKeys';

export const projectQueries = {
  list: () =>
    queryOptions({
      queryKey: projectKeys.list(),
      queryFn: getProjects,
    }),

  detail: (id: string) =>
    queryOptions({
      queryKey: projectKeys.detail(id),
      queryFn: ({ signal }) => getProject(id, signal),
    }),
};
