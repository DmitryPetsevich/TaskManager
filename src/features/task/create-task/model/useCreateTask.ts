import { useMutation } from '@tanstack/react-query';
import { createTask } from '@entities/task/api/task.api';
import { taskKeys } from '@entities/task/lib/queryKeys';
import type { ITaskDto } from '@entities/task/model/types';

export function useCreateTask() {
  return useMutation({
    mutationFn: createTask,
    onMutate: async (newTask, context) => {
      const queryKey = taskKeys.projectTasks(newTask.projectId);

      await context.client.cancelQueries({ queryKey });

      const previousTasks: ITaskDto[] = context.client.getQueryData(queryKey) || [];

      context.client.setQueryData(queryKey, (old: ITaskDto[] = []) => [...old, newTask]);

      return { previousTasks };
    },
    onError: (_err, newTask, onMutateResult, context) => {
      context.client.setQueryData(
        taskKeys.projectTasks(newTask.projectId),
        onMutateResult?.previousTasks,
      );
    },
    onSettled: (_data, _error, newTask, _onMutateResult, context) => {
      context.client.invalidateQueries({ queryKey: taskKeys.projectTasks(newTask.projectId) });
    },
  });
}
