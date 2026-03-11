import { Button } from '@shared/ui/button/Button';
import { useQuery } from '@tanstack/react-query';
import { PageHeader } from '@shared/ui/page-header/PageHeader';
import { ProjectsTable } from '@widgets/projects-table/ProjectsTable';
import { projectQueries } from '@entities/project/project.queries';
import { ProjectsSkeleton } from '@widgets/projects-table/ProjectsSkeleton';

const ProjectsPage = () => {
  const { data = [], isPending, isFetching, isError } = useQuery(projectQueries.list());

  if (isError) {
    return <>Error</>;
  }

  return (
    <>
      <PageHeader
        title="Projects"
        action={
          <Button className={!isFetching && !data.length ? 'animate-pulse' : ''}>
            New Project
          </Button>
        }
      />

      <div className="flex-1 overflow-auto mx-4 mt-1">
        {isPending && !data.length ? (
          <ProjectsSkeleton />
        ) : data.length ? (
          <ProjectsTable projects={data} />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500 text-3xl font-semibold">
            No projects found
          </div>
        )}
      </div>

      <div className="h-12 px-4 py-2 border-t border-gray-200"></div>
    </>
  );
};

export default ProjectsPage;
