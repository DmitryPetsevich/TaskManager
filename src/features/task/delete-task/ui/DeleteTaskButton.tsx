import { useCallback } from 'react';
import { MdDelete } from 'react-icons/md';
import { IconButton } from '@shared/ui/icon-button/IconButton';
import { ConfirmDialog } from '@shared/ui/confirm-dialog/ConfirmDialog';
import { useDeleteTask } from '@features/task/delete-task/model/useDeleteTask';
import { useDialog } from '@shared/ui/dialog/useDialog';
import type { ITaskDto } from '@entities/task/model/types';

type Props = {
  task: ITaskDto;
};

export const DeleteTaskButton = ({ task }: Props) => {
  const { open, close } = useDialog();
  const { mutate } = useDeleteTask();

  const handleDelete = useCallback(() => {
    mutate(task);
    close();
  }, [task, mutate, close]);

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
