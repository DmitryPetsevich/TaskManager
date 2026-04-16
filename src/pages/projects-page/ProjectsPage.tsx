import { useQuery } from '@tanstack/react-query';
import { usePageTitle } from '@shared/lib/hooks/usePageTitle';
import { PageHeader } from '@shared/ui/page-header/PageHeader';
import { ProjectsTable } from '@widgets/projects-table';
import { projectQueries } from '@entities/project';
import { CreateProjectButton } from '@features/project/create-project';

const ProjectsPage = () => {
  usePageTitle('Projects');

  const { data = [], isPending, isFetching, isError } = useQuery(projectQueries.list());

  if (isError) {
    throw new Error('Pojects are failed to load');
  }

  return (
    <>
      <PageHeader
        title="Projects"
        action={<CreateProjectButton isPulse={!isFetching && !data.length} />}
      />

      <div className="flex-1 overflow-auto mx-4 mt-1">
        <ProjectsTable isPendingData={isPending} data={data} />
      </div>

      <div className="h-12 px-4 py-2 border-t border-gray-200">{/* Pagination space*/}</div>
    </>
  );
};

export default ProjectsPage;
