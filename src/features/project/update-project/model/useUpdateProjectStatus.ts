import { useMutation } from '@tanstack/react-query';
import { projectQueryKeys, updateProject, type ProjectDTO } from '@entities/project';

export function useUpdateProjectStatus() {
  const queryKey = projectQueryKeys.list();

  return useMutation({
    mutationFn: updateProject,
    onMutate: async ({ id, data }, context) => {
      await context.client.cancelQueries({ queryKey });

      const previousProjects = context.client.getQueryData(queryKey);

      context.client.setQueryData(queryKey, (old: ProjectDTO[]) =>
        old.map((project) => {
          if (project.id === id) return { ...project, ...data };

          return project;
        }),
      );

      return { previousProjects };
    },
    onError: (_err, _project, onMutateResult, context) => {
      context.client.setQueryData(queryKey, onMutateResult?.previousProjects);
    },
    onSettled: (_data, _error, _project, _onMutateResult, context) => {
      context.client.invalidateQueries({ queryKey });
    },
  });
}
