import { DeleteProjectButton } from '@features/project/delete-project/ui/DeleteProjectButton';
import { UpdateProjectStatusButton } from '@features/project/update-project/ui/UpdateProjectStatusButton';
import type { IProjectDto } from '@entities/project/model/types';

type Props = {
  project: IProjectDto;
};

export const ProjectActionsCell = ({ project }: Props) => {
  return (
    <>
      <UpdateProjectStatusButton project={project} />
      <DeleteProjectButton project={project} />
    </>
  );
};
