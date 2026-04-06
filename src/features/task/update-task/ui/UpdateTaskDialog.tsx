import { MdClose } from 'react-icons/md';
import { useDialog } from '@shared/ui/dialog/useDialog';
import { IconButton } from '@shared/ui/icon-button/IconButton';
import {
  TaskForm,
  useCachedTasks,
  useTaskDependencyOptions,
  type TaskDTO,
  type TaskFormInput,
} from '@entities/task';
import { useUpdateTask } from '../model/useUpdateTask';
import { createTaskSchema } from '../model/schema';
import { updateTaskData } from '../lib/updateTaskData';
import { createInitialValues } from '../lib/createInitialValues';

type Props = {
  task: TaskDTO;
};

export const UpdateTaskDialog = ({ task }: Props) => {
  const { close } = useDialog();
  const updateTaskMutation = useUpdateTask(task.projectId);
  const tasks = useCachedTasks(task.projectId);
  const taskDepsOptions = useTaskDependencyOptions(task.projectId, task.id);
  const schema = createTaskSchema(tasks, task);
  const defaultValues = createInitialValues(task);

  const handleSubmit = (data: TaskFormInput) => {
    updateTaskMutation.mutate({ id: task.id, data: updateTaskData(task, data) });
    close();
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
        <h2 className="text-2xl font-semibold truncate">Edit {`"${task.name}"`}</h2>
        <IconButton className="shrink-0" onClick={close} icon={<MdClose />} />
      </div>
      <TaskForm
        schema={schema}
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        taskDepsOptions={taskDepsOptions}
      />
    </div>
  );
};
