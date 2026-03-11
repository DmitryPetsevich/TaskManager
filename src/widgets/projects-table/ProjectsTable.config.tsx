import type { IProjectDto } from '@entities/project/project.types';
import type { TableColumn } from '@shared/lib/table-builder/TableBuilder.types';
import { Link } from 'react-router-dom';

export const columns = [
  {
    type: 'data',
    key: 'title',
    header: 'Title',
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
    render: () => (
      <>
        <button>Edit</button>
        <button>Delete</button>
      </>
    ),
  },
] satisfies TableColumn<IProjectDto>[];
