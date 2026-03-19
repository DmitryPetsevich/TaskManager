import { MdClose } from 'react-icons/md';
import { useDialog } from '@shared/ui/dialog/useDialog';
import { useCreateTask } from '@features/task/create-task/model/useCreateTask';
import { IconButton } from '@shared/ui/icon-button/IconButton';
import { TaskForm } from '@entities/task/ui/TaskForm';
import type { TaskFormValues } from '@entities/task/model/schema';
import { createTask } from '@entities/task/lib/createTask';

type Props = {
  projectId: string;
};

export const CreateTaskDialog = ({ projectId }: Props) => {
  const { close } = useDialog();
  const mutation = useCreateTask();

  const handleSubmit = (data: TaskFormValues) => {
    mutation.mutate(createTask(projectId, data));

    close();
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
        <h2 className="text-2xl font-semibold ">Create New Task</h2>
        <IconButton onClick={close} icon={<MdClose />} data-testid="icon-button-close" />
      </div>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
};
