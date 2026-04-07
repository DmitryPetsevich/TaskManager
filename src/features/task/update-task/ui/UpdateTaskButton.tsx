import { MdEdit } from 'react-icons/md';
import type { TaskDTO } from '@entities/task';
import { useDialog } from '@shared/ui/dialog/useDialog';
import { IconButton } from '@shared/ui/icon-button/IconButton';
import { UpdateTaskDialog } from './UpdateTaskDialog';

type Props = {
  task: TaskDTO;
};

export const UpdateTaskButton = ({ task }: Props) => {
  const { open } = useDialog();

  return <IconButton icon={<MdEdit />} onClick={() => open(<UpdateTaskDialog task={task} />)} />;
};
