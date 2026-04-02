import { useTasksFromQueryCache } from '@entities/task/lib/hooks/useTasksFromQueryCache';

export function useTaskDependencyOptions(projectId: string, taskId?: string) {
  const tasks = useTasksFromQueryCache(projectId);

  return tasks
    .filter((t) => t.id !== taskId)
    .map((t) => ({
      label: t.name,
      value: t.id,
    }));
}
