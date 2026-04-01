import { useCallback } from 'react';
import { MdEdit } from 'react-icons/md';
import { useDialog } from '@shared/ui/dialog/useDialog';
import type { ITaskDto } from '@entities/task/model/types';
import { IconButton } from '@shared/ui/icon-button/IconButton';
import { UpdateTaskDialog } from '@features/task/update-task/ui/UpdateTaskDialog';

type Props = {
  task: ITaskDto;
};

export const UpdateTaskButton = ({ task }: Props) => {
  const { open } = useDialog();

  const handleClick = useCallback(() => {
    open(<UpdateTaskDialog task={task} />);
  }, [open, task]);

  return <IconButton icon={<MdEdit />} onClick={handleClick} />;
};
