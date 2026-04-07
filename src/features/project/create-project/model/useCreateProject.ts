import { useMutation } from '@tanstack/react-query';
import { createProject, projectQueryKeys, type ProjectDTO } from '@entities/project';

export function useCreateProject() {
  const queryKey = projectQueryKeys.list();

  return useMutation({
    mutationFn: createProject,
    onMutate: async (newProject, context) => {
      await context.client.cancelQueries({ queryKey });

      const previousProjects = context.client.getQueryData<ProjectDTO[]>(queryKey);

      context.client.setQueryData(queryKey, (old: ProjectDTO[] = []) => [...old, newProject]);

      return { previousProjects };
    },
    onError: (_err, _newProject, onMutateResult, context) => {
      context.client.setQueryData(queryKey, onMutateResult?.previousProjects);
    },
    onSettled: (_data, _error, _variables, _onMutateResult, context) => {
      context.client.invalidateQueries({ queryKey });
    },
  });
}
