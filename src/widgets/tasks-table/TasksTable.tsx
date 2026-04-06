import type { TaskDTO } from '@entities/task';
import { TableBuilder } from '@shared/lib/table-builder/TableBuilder';
import { TableSkeleton } from '@shared/ui/table-skeleton/TableSkeleton';
import { columns } from '@widgets/tasks-table/TasksTable.config';

type Props = {
  isPendingData: boolean;
  data: TaskDTO[][];
};

export const TasksTable = ({ isPendingData, data = [] }: Props) => {
  if (!isPendingData && !data.length) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500 text-3xl font-semibold">
        No tasks found
      </div>
    );
  }

  if (isPendingData && !data.length) {
    return <TableSkeleton />;
  }

  return (
    <>
      {data.map((tGroup, index) => (
        <div className="mb-8 last:mb-0" key={index}>
          <h2 className="h-10 text-1xl font-semibold text-gray-800">Group {index + 1}</h2>
          <TableBuilder data={tGroup} columns={columns} getRowKey={(task) => task.id} />
        </div>
      ))}
    </>
  );
};
