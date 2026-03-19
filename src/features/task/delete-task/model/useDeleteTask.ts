import { useMutation } from '@tanstack/react-query';
import { deleteTask, updateTask } from '@entities/task/api/task.api';
import { taskKeys } from '@entities/task/lib/queryKeys';
import type { ITaskDto } from '@entities/task/model/types';

export function useDeleteTask() {
  return useMutation({
    mutationFn: deleteTask,
    onMutate: async (task, context) => {
      const queryKey = taskKeys.projectTasks(task.projectId);

      await context.client.cancelQueries({ queryKey });

      const previousTasks: ITaskDto[] = context.client.getQueryData(queryKey) || [];

      const affected = previousTasks.filter((t) => t.dependOn.includes(task.id));

      context.client.setQueryData(queryKey, (old: ITaskDto[]) =>
        old
          .filter((t) => t.id !== task.id)
          .map((t) => ({
            ...t,
            dependOn: t.dependOn.filter((dep) => dep !== task.id),
          })),
      );

      await Promise.all(
        affected.map((t) =>
          updateTask({
            id: t.id,
            data: { dependOn: t.dependOn.filter((dep) => dep !== task.id) },
          }),
        ),
      );

      return { previousTasks };
    },
    onError: (_err, task, onMutateResult, context) => {
      context.client.setQueryData(
        taskKeys.projectTasks(task.projectId),
        onMutateResult?.previousTasks,
      );
    },
    onSettled: (_data, _error, task, _onMutateResult, context) => {
      context.client.invalidateQueries({ queryKey: taskKeys.projectTasks(task.projectId) });
    },
  });
}
