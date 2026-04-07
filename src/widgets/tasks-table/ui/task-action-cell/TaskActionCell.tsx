import { DeleteTaskButton } from '@features/task/delete-task';
import { UpdateTaskButton } from '@features/task/update-task';
import type { TaskDTO } from '@entities/task';

type Props = {
  task: TaskDTO;
};

export const TaskActionCell = ({ task }: Props) => {
  return (
    <>
      <UpdateTaskButton task={task} />
      <DeleteTaskButton task={task} />
    </>
  );
};
