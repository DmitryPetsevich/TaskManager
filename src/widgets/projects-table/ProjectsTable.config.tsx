import { Link } from 'react-router-dom';
import { ProjectActionsCell } from '@entities/project/ui/ProjectActionsCell';
import type { IProjectDto } from '@entities/project/model/types';
import type { TableColumn } from '@shared/lib/table-builder/TableBuilder.types';

export const columns = [
  {
    type: 'data',
    key: 'name',
    header: 'Name',
    render: (value, row) => <Link to={`${row.id}`}>{value}</Link>,
  },
  {
    type: 'data',
    key: 'createdAt',
    header: 'Created',
    render: (value) => new Date(value).toLocaleDateString(),
  },
  {
    type: 'data',
    key: 'status',
    header: 'Status',
  },
  {
    type: 'display',
    key: 'actions',
    header: '',
    render: (project) => <ProjectActionsCell project={project} />,
  },
] satisfies TableColumn<IProjectDto>[];
