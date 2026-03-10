import { Button } from '@shared/ui/button/Button';
import { PageHeader } from '@shared/ui/page-header/PageHeader';

const ProjectsPage = () => {
  return (
    <>
      <PageHeader title="Projects" action={<Button>New Project</Button>} />
    </>
  );
};

export default ProjectsPage;
