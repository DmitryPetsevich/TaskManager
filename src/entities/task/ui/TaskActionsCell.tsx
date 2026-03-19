import { DeleteTaskButton } from '@features/task/delete-task/ui/DeleteTaskButton';
import type { ITaskDto } from '@entities/task/model/types';

type Props = {
  task: ITaskDto;
};

export const TaskActionsCell = ({ task }: Props) => {
  return (
    <>
      <DeleteTaskButton task={task} />
    </>
  );
};
