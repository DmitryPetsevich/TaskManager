import { useMutation } from '@tanstack/react-query';
import { createProject } from '@entities/project/api/project.api';
import { projectKeys } from '@entities/project/lib/queryKeys';
import type { IProjectDto } from '@entities/project/model/types';

export function useCreateProject() {
  return useMutation({
    mutationFn: createProject,
    onMutate: async (newProject, context) => {
      await context.client.cancelQueries({ queryKey: projectKeys.list() });

      const previousProjects = context.client.getQueryData(projectKeys.list());

      context.client.setQueryData(projectKeys.list(), (old: IProjectDto[] = []) => [
        ...old,
        newProject,
      ]);

      return { previousProjects };
    },
    onError: (_err, _newProject, onMutateResult, context) => {
      context.client.setQueryData(projectKeys.list(), onMutateResult?.previousProjects);
    },
    onSettled: (_data, _error, _variables, _onMutateResult, context) => {
      context.client.invalidateQueries({ queryKey: projectKeys.list() });
    },
  });
}
