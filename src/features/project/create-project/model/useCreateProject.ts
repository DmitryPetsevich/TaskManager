import { useMutation } from '@tanstack/react-query';
import { createProject } from '@entities/project/api/project.api';
import { projectKeys } from '@entities/project/lib/queryKeys';
import type { IProjectDto } from '@entities/project/model/types';

export function useCreateProject() {
  const queryKey = projectKeys.list();

  return useMutation({
    mutationFn: createProject,
    onMutate: async (newProject, context) => {
      await context.client.cancelQueries({ queryKey });

      const previousProjects = context.client.getQueryData(queryKey);

      context.client.setQueryData(queryKey, (old: IProjectDto[] = []) => [...old, newProject]);

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
