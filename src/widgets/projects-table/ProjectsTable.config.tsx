import { Link } from 'react-router-dom';
import { ProjectActionCell } from '@widgets/projects-table/ui/project-action-cell/ProjectActionCell';
import type { ProjectDTO } from '@entities/project';
import type { TableColumn } from '@shared/lib/table-builder/TableBuilder.types';

export const columns = [
  {
    type: 'data',
    key: 'name',
    header: 'Name',
    render: (value, row) => (
      <Link to={`${row.id}`} className="text-blue-400 visited:text-blue-800 hover:underline">
        {value}
      </Link>
    ),
    thClassName: 'w-[240px]',
  },
  {
    type: 'data',
    key: 'createdAt',
    header: 'Created',
    render: (value) => new Date(value).toLocaleDateString(),
    thClassName: 'w-[240px]',
  },
  {
    type: 'data',
    key: 'status',
    header: 'Status',
    thClassName: 'w-[240px]',
  },
  {
    type: 'display',
    key: 'actions',
    header: '',
    render: (project) => <ProjectActionCell project={project} />,
    align: 'right',
  },
] satisfies TableColumn<ProjectDTO>[];
