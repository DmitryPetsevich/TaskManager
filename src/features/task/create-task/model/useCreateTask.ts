import { useMutation } from '@tanstack/react-query';
import { createTask, taskQueryKeys, type TaskDTO } from '@entities/task';

export function useCreateTask(projectId: string) {
  const queryKey = taskQueryKeys.projectTasks(projectId);

  return useMutation({
    mutationFn: createTask,
    onMutate: async (task, context) => {
      await context.client.cancelQueries({ queryKey });

      const previousTasks: TaskDTO[] = context.client.getQueryData(queryKey) || [];

      context.client.setQueryData(queryKey, (old: TaskDTO[] = []) => [...old, task]);

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
