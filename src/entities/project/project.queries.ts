import { getProjects } from '@entities/project/project.api';

export const projectQueries = {
  list: () => ({
    queryKey: ['projects', 'list'] as const,
    queryFn: getProjects,
  }),
  detail: (id: string) => ({
    queryKey: ['projects', 'detail', id] as const,
    queryFn: () => {},
  }),
};
