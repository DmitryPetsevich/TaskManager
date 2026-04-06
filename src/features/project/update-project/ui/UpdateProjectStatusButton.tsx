import { useCallback, useMemo } from 'react';
import { MdPause, MdPlayArrow } from 'react-icons/md';
import { IconButton } from '@shared/ui/icon-button/IconButton';
import { useUpdateProjectStatus } from '@features/project/update-project/model/useUpdateProjectStatus';
import type { ProjectDTO } from '@entities/project';

type Props = {
  project: ProjectDTO;
};

export const UpdateProjectStatusButton = ({ project }: Props) => {
  const { mutate, isPending } = useUpdateProjectStatus();

  const icon = useMemo(() => {
    if (project.status === 'Paused') return <MdPlayArrow data-testid="icon-play-arrow" />;
    if (project.status === 'In Progress') return <MdPause data-testid="icon-pause" />;

    return <></>;
  }, [project.status]);

  const handleClick = useCallback(() => {
    let nextStatus: ProjectDTO['status'] = 'Done';

    if (project.status === 'Paused') nextStatus = 'In Progress';
    if (project.status === 'In Progress') nextStatus = 'Paused';

    mutate({ id: project.id, data: { status: nextStatus } });
  }, [project.id, project.status, mutate]);

  if (project.status === 'Done') return null;

  return <IconButton icon={icon} onClick={handleClick} disabled={isPending} />;
};
