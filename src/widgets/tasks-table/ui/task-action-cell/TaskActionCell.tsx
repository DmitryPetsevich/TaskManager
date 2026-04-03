import { DeleteTaskButton } from '@features/task/delete-task/ui/DeleteTaskButton';
import { UpdateTaskButton } from '@features/task/update-task/ui/UpdateTaskButton';
import type { ITaskDto } from '@entities/task/model/types';

type Props = {
  task: ITaskDto;
};

export const TaskActionCell = ({ task }: Props) => {
  return (
    <>
      <UpdateTaskButton task={task} />
      <DeleteTaskButton task={task} />
    </>
  );
};
