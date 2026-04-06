import { TaskActionCell } from '@widgets/tasks-table/ui/task-action-cell/TaskActionCell';
import type { TaskDTO } from '@entities/task';
import type { TableColumn } from '@shared/lib/table-builder/TableBuilder.types';

export const columns = [
  {
    type: 'data',
    key: 'name',
    header: 'Name',
    stickyHeader: false,
    thClassName: 'w-[240px]',
  },
  {
    type: 'data',
    key: 'createdAt',
    header: 'Created',
    stickyHeader: false,
    render: (value) => new Date(value).toLocaleString('ru-Ru'),
    thClassName: 'w-[240px]',
  },
  {
    type: 'data',
    key: 'updatedAt',
    header: 'Updated',
    stickyHeader: false,
    render: (value) => new Date(value).toLocaleString('ru-Ru'),
    thClassName: 'w-[240px]',
  },
  {
    type: 'data',
    key: 'status',
    header: 'Status',
    stickyHeader: false,
    thClassName: 'w-[240px]',
  },
  {
    type: 'data',
    key: 'priority',
    header: 'Priority',
    stickyHeader: false,
    thClassName: 'w-[240px]',
  },
  {
    type: 'display',
    key: 'actions',
    header: '',
    stickyHeader: false,
    render: (task) => <TaskActionCell task={task} />,
    align: 'right',
  },
] satisfies TableColumn<TaskDTO>[];
