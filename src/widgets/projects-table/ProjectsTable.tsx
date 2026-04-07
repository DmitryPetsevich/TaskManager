import { TableBuilder } from '@shared/lib/table-builder/TableBuilder';
import { TableSkeleton } from '@shared/ui/table-skeleton/TableSkeleton';
import type { ProjectDTO } from '@entities/project';
import { columns } from './ProjectsTable.config';

type Props = {
  isPendingData: boolean;
  data: ProjectDTO[];
};

export const ProjectsTable = ({ isPendingData, data }: Props) => {
  if (isPendingData) {
    return <TableSkeleton />;
  }

  if (!data.length) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500 text-3xl font-semibold">
        No projects found
      </div>
    );
  }

  return <TableBuilder data={data} columns={columns} getRowKey={(project) => project.id} />;
};
