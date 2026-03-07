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
          <TableHeaderCell key={String(column.key)}>{column.header}</TableHeaderCell>
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
                <TableCell key={String(column.key)}>
                  {column.render ? column.render(value, row) : String(value)}
                </TableCell>
              );
            }

            return <TableCell key={column.key}>{column.render(row)}</TableCell>;
          })}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
