import { useCachedTasks } from './useCachedTasks';

export function useTaskDependencyOptions(projectId: string, taskId?: string) {
  const tasks = useCachedTasks(projectId);

  return tasks
    .filter((t) => t.id !== taskId)
    .map((t) => ({
      label: t.name,
      value: t.id,
    }));
}
