import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { projectQueries } from '@entities/project';
import { taskQueries } from '@entities/task';
import { PageHeader } from '@shared/ui/page-header/PageHeader';
import { TasksTable } from '@widgets/tasks-table/TasksTable';
import { CreateTaskButton } from '@features/task/create-task';

const ProjectDetailPage = () => {
  const params = useParams();

  const { data: projectData } = useQuery({
    ...projectQueries.detail(params.id!),
    enabled: !!params.id,
  });

  const {
    data: taskData = [],
    isFetching: isTFetching,
    isPending: isTPending,
    isError: isTError,
  } = useQuery({
    ...taskQueries.tasksByProjectId(params.id!),
    enabled: !!params.id,
  });

  if (isTError) {
    throw new Error('Tasks are failed to load');
  }

  return (
    <>
      <PageHeader
        title={projectData?.name}
        action={
          <CreateTaskButton
            projectId={projectData?.id!}
            isPulse={!isTFetching && !taskData.length}
          />
        }
      />
      <div className="flex-1 overflow-auto mx-4 mt-2 mb-12">
        <TasksTable isPendingData={isTPending} data={taskData} />
      </div>
    </>
  );
};

export default ProjectDetailPage;
