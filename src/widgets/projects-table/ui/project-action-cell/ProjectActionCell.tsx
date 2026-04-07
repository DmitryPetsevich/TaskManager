import type { ProjectDTO } from '@entities/project';
import { DeleteProjectButton } from '@features/project/delete-project';
import { UpdateProjectStatusButton } from '@features/project/update-project';

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
