import { queryOptions } from '@tanstack/react-query';
import { getProject, getProjects } from './project.api';
import { projectQueryKeys } from '../lib/queryKeys';

export const projectQueries = {
  list: () =>
    queryOptions({
      queryKey: projectQueryKeys.list(),
      queryFn: ({ signal }) => getProjects(signal),
    }),

  detail: (id: string) =>
    queryOptions({
      queryKey: projectQueryKeys.detail(id),
      queryFn: ({ signal }) => getProject(id, signal),
    }),
};
