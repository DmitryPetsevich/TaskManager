export const taskKeys = {
  all: ['tasks'] as const,
  projectTasks: (projectId: string) => [...taskKeys.all, projectId] as const,
};
