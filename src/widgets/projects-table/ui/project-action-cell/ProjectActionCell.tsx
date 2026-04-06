import { DeleteProjectButton } from '@features/project/delete-project/ui/DeleteProjectButton';
import { UpdateProjectStatusButton } from '@features/project/update-project/ui/UpdateProjectStatusButton';
import type { ProjectDTO } from '@entities/project';

type Props = {
  project: ProjectDTO;
};

export const ProjectActionCell = ({ project }: Props) => {
  return (
    <>
      <UpdateProjectStatusButton project={project} />
      <DeleteProjectButton project={project} />
    </>
  );
};
