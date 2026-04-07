import { useCallback } from 'react';
import { MdDelete } from 'react-icons/md';
import { IconButton } from '@shared/ui/icon-button/IconButton';
import { ConfirmDialog } from '@shared/ui/confirm-dialog/ConfirmDialog';
import { useDialog } from '@shared/ui/dialog/useDialog';
import type { TaskDTO } from '@entities/task';
import { useDeleteTask } from '../model/useDeleteTask';

type Props = {
  task: TaskDTO;
};

export const DeleteTaskButton = ({ task }: Props) => {
  const { open, close } = useDialog();
  const deleteMutation = useDeleteTask(task.projectId);

  const handleDelete = useCallback(() => {
    deleteMutation.mutate(task.id);
    close();
  }, [task.id, deleteMutation, close]);

  const handleClick = useCallback(() => {
    open(
      <ConfirmDialog
        title={`Delete Task`}
        question={`Are you sure you want to delete task "${task.name}"?`}
        confirmText="DELETE"
        onConfirm={handleDelete}
        onCancel={close}
      />,
    );
  }, [task.name, open, close, handleDelete]);

  return <IconButton icon={<MdDelete />} onClick={handleClick} />;
};
