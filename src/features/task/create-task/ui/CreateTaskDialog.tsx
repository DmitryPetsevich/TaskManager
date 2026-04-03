import { MdClose } from 'react-icons/md';
import { useDialog } from '@shared/ui/dialog/useDialog';
import { IconButton } from '@shared/ui/icon-button/IconButton';
import { TaskForm } from '@entities/task/ui/TaskForm';
import { useCreateTask } from '@features/task/create-task/model/useCreateTask';
import type { TaskFormValues } from '@entities/task/model/schema';
import { createTaskDto } from '@entities/task/lib/createTaskDto';

type Props = {
  projectId: string;
};

export const CreateTaskDialog = ({ projectId }: Props) => {
  const { close } = useDialog();
  const createTaskMutation = useCreateTask(projectId);

  const handleSubmit = (data: TaskFormValues) => {
    createTaskMutation.mutate(createTaskDto(projectId, data));
    close();
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
        <h2 className="text-2xl font-semibold ">Create New Task</h2>
        <IconButton className="shrink-0" onClick={close} icon={<MdClose />} />
      </div>
      <TaskForm projectId={projectId} onSubmit={handleSubmit} />
    </div>
  );
};
