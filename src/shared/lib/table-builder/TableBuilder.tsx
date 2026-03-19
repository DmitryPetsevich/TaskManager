import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableCell,
} from '@shared/ui/table';
import type { TableColumn } from '@shared/lib/table-builder/TableBuilder.types';

type Props<T> = {
  data: T[];
  columns: TableColumn<T>[];
  getRowKey: (row: T) => string;
  scrollHeight?: number | string;
};

export const TableBuilder = <T,>({ data, columns, getRowKey, scrollHeight }: Props<T>) => (
  <Table scrollHeight={scrollHeight}>
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableHeaderCell
            key={String(column.key)}
            className={column.thClassName}
            align={column.align}
            sticky={column.stickyHeader}
          >
            {column.header}
          </TableHeaderCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((row) => (
        <TableRow key={getRowKey(row)}>
          {columns.map((column) => {
            if (column.type === 'data') {
              const value = row[column.key];

              return (
                <TableCell
                  key={String(column.key)}
                  className={column.tdClassName}
                  align={column.align}
                >
                  {column.render ? column.render(value, row) : String(value)}
                </TableCell>
              );
            }

            return (
              <TableCell key={column.key} className={column.tdClassName} align={column.align}>
                {column.render(row)}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
