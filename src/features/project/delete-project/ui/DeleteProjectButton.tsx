import { useCallback } from 'react';
import { MdDelete } from 'react-icons/md';
import { IconButton } from '@shared/ui/icon-button/IconButton';
import { useDeleteProject } from '@features/project/delete-project/model/useDeleteProject';
import { useDialog } from '@shared/ui/dialog/useDialog';
import { ConfirmDialog } from '@shared/ui/confirm-dialog/ConfirmDialog';
import type { ProjectDTO } from '@entities/project';

type Props = {
  project: ProjectDTO;
};

export const DeleteProjectButton = ({ project }: Props) => {
  const { open, close } = useDialog();
  const { mutate } = useDeleteProject();

  const handleDelete = useCallback(() => {
    mutate(project.id);
    close();
  }, [project.id, mutate, close]);

  const handleClick = useCallback(() => {
    open(
      <ConfirmDialog
        title={`Delete Project`}
        question={`Are you sure you want to delete project "${project.name}"?`}
        confirmText="DELETE"
        onConfirm={handleDelete}
        onCancel={close}
      />,
    );
  }, [project.name, open, close, handleDelete]);

  return <IconButton icon={<MdDelete />} onClick={handleClick} />;
};
