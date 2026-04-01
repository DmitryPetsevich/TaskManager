import { useMutation } from '@tanstack/react-query';
import { updateTask } from '@entities/task/api/task.api';
import { taskKeys } from '@entities/task/lib/queryKeys';
import type { ITaskDto } from '@entities/task/model/types';

export function useUpdateTask(projectId: string) {
  const queryKey = taskKeys.projectTasks(projectId);

  return useMutation({
    mutationFn: updateTask,
    onMutate: async (task, context) => {
      await context.client.cancelQueries({ queryKey });

      const previousTasks: ITaskDto[] = context.client.getQueryData(queryKey) || [];

      context.client.setQueryData(queryKey, (old: ITaskDto[]) =>
        old.map((t) => (t.id === task.id ? { ...t, ...task.data } : t)),
      );

      return { previousTasks };
    },
    onError: (_err, _task, onMutateResult, context) => {
      context.client.setQueryData(queryKey, onMutateResult?.previousTasks);
    },
    onSettled: (_data, _error, _task, _onMutateResult, context) => {
      context.client.invalidateQueries({ queryKey });
    },
  });
}
