export const taskQueryKeys = {
  all: ['tasks'] as const,
  projectTasks: (projectId: string) => [...taskQueryKeys.all, 'project', projectId] as const,
};
