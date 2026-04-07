import { MdClose } from 'react-icons/md';
import { useDialog } from '@shared/ui/dialog/useDialog';
import { IconButton } from '@shared/ui/icon-button/IconButton';
import {
  schema,
  TaskForm,
  createTaskEntity,
  useTaskDependencyOptions,
  type TaskFormInput,
} from '@entities/task';
import { useCreateTask } from '../model/useCreateTask';
import { createInitialValues } from '../lib/createInitialValues';

type Props = {
  projectId: string;
};

export const CreateTaskDialog = ({ projectId }: Props) => {
  const { close } = useDialog();
  const createTaskMutation = useCreateTask(projectId);
  const defaultValues = createInitialValues();
  const taskDepsOptions = useTaskDependencyOptions(projectId);

  const handleSubmit = (data: TaskFormInput) => {
    createTaskMutation.mutate(createTaskEntity(projectId, data));
    close();
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
        <h2 className="text-2xl font-semibold ">Create New Task</h2>
        <IconButton className="shrink-0" onClick={close} icon={<MdClose />} />
      </div>
      <TaskForm
        schema={schema}
        defaultValues={defaultValues}
        taskDepsOptions={taskDepsOptions}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
