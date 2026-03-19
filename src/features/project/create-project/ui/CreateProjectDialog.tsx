import { MdClose } from 'react-icons/md';
import { useDialog } from '@shared/ui/dialog/useDialog';
import { useCreateProject } from '@features/project/create-project/model/useCreateProject';
import { ProjectForm } from '@entities/project/ui/ProjectForm';
import { IconButton } from '@shared/ui/icon-button/IconButton';
import type { ProjectFormValues } from '@entities/project/model/schema';
import { createProject } from '@entities/project/lib/createProject';

export const CreateProjectDialog = () => {
  const { close } = useDialog();
  const mutation = useCreateProject();

  const handleSubmit = (data: ProjectFormValues) => {
    mutation.mutate(createProject(data));

    close();
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
        <h2 className="text-2xl font-semibold ">Create New Project</h2>
        <IconButton onClick={close} icon={<MdClose />} data-testid="icon-button-close" />
      </div>
      <ProjectForm onSubmit={handleSubmit} />
    </div>
  );
};
