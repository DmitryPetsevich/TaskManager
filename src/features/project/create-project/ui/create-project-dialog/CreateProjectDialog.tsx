import { MdClose } from 'react-icons/md';
import { useDialog } from '@shared/ui/dialog/useDialog';
import { IconButton } from '@shared/ui/icon-button/IconButton';
import { ProjectForm, type ProjectFormInput } from '@entities/project';
import { useCreateProject } from '../../model/useCreateProject';
import { createProjectData } from '../../lib/createProjectData';

export const CreateProjectDialog = () => {
  const { close } = useDialog();
  const mutation = useCreateProject();

  const handleSubmit = (data: ProjectFormInput) => {
    mutation.mutate(createProjectData(data));

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
