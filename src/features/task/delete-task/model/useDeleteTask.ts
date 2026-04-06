import { useMutation } from '@tanstack/react-query';
import { taskQueryKeys, deleteTask, updateTask, type TaskDTO } from '@entities/task';

export function useDeleteTask(projectId: string) {
  const queryKey = taskQueryKeys.projectTasks(projectId);

  return useMutation({
    mutationFn: deleteTask,
    onMutate: async (taskId, context) => {
      await context.client.cancelQueries({ queryKey });

      const previousTasks: TaskDTO[] = context.client.getQueryData(queryKey) || [];

      const affected = previousTasks.filter((t) => t.dependOn.includes(taskId));

      context.client.setQueryData(queryKey, (old: TaskDTO[]) =>
        old
          .filter((t) => t.id !== taskId)
          .map((t) => ({
            ...t,
            dependOn: t.dependOn.filter((dep) => dep !== taskId),
          })),
      );

      await Promise.all(
        affected.map((t) =>
          updateTask({
            id: t.id,
            data: { dependOn: t.dependOn.filter((dep) => dep !== taskId) },
          }),
        ),
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
