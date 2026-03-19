import { TableBuilder } from '@shared/lib/table-builder/TableBuilder';
import { TableSkeleton } from '@shared/ui/table-skeleton/TableSkeleton';
import { columns } from '@widgets/projects-table/ProjectsTable.config';
import type { IProjectDto } from '@entities/project/model/types';

type Props = {
  isPendingData: boolean;
  data: IProjectDto[];
};

export const ProjectsTable = ({ isPendingData, data }: Props) => {
  if (!isPendingData && !data.length) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500 text-3xl font-semibold">
        No projects found
      </div>
    );
  }

  if (isPendingData && !data.length) {
    return <TableSkeleton />;
  }

  return <TableBuilder data={data} columns={columns} getRowKey={(project) => project.id} />;
};
