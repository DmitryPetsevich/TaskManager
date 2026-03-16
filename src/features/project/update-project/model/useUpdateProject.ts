import { useMutation } from '@tanstack/react-query';
import { updateProject } from '@entities/project/api/project.api';
import { projectKeys } from '@entities/project/lib/queryKeys';
import type { IProjectDto } from '@entities/project/model/types';

export function useUpdateProject() {
  return useMutation({
    mutationFn: updateProject,
    onMutate: async ({ id, data }, context) => {
      await context.client.cancelQueries({ queryKey: projectKeys.all });

      const previousProjects = context.client.getQueryData(projectKeys.list());
      const previousProject = context.client.getQueryData(projectKeys.detail(id));

      context.client.setQueryData(projectKeys.detail(id), (old: IProjectDto) => ({
        ...old,
        ...data,
      }));

      context.client.setQueryData(projectKeys.list(), (old: IProjectDto[]) =>
        old.map((project) => {
          if (project.id === id) return { ...project, ...data };

          return project;
        }),
      );

      return { previousProject, previousProjects };
    },
    onError: (_err, updatedProject, onMutateResult, context) => {
      context.client.setQueryData(projectKeys.list(), onMutateResult?.previousProjects);
      context.client.setQueryData(
        projectKeys.detail(updatedProject.id),
        onMutateResult?.previousProject,
      );
    },
    onSettled: (_data, _error, updatedProject, _onMutateResult, context) => {
      context.client.invalidateQueries({ queryKey: projectKeys.list() });
      context.client.invalidateQueries({ queryKey: projectKeys.detail(updatedProject.id) });
    },
  });
}
