import type { ReactNode } from 'react';

export type TableDataColumn<T, K extends keyof T> = {
  type: 'data';
  key: K;
  header: ReactNode;
  render?: (value: T[K], row: T) => ReactNode;
};

export type TableDisplayColumn<T> = {
  type: 'display';
  key: string;
  header: ReactNode;
  render: (row: T) => ReactNode;
};

export type TableColumn<T> =
  | TableDisplayColumn<T>
  | { [K in keyof T]: TableDataColumn<T, K> }[keyof T];
