import type { IProjectDto } from '@entities/project/project.types';
import { TableBuilder } from '@shared/lib/table-builder/TableBuilder';
import { columns } from '@widgets/projects-table/ProjectsTable.config';

type Props = {
  projects: IProjectDto[];
};

export const ProjectsTable = ({ projects }: Props) => (
  <TableBuilder data={projects} columns={columns} getRowKey={(project) => project.id} />
);
