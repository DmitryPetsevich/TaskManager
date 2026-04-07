import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TasksTable } from './TasksTable';

describe('TasksTable', () => {
  test('Should render skeleton when isPending is true and data is empty', () => {
    render(<TasksTable isPendingData={true} data={[]} />);

    expect(screen.getByTestId('table-skeleton-id')).toBeInTheDocument();
  });

  test('Should render message "No projects found" if first request is completed and data is empty', () => {
    render(<TasksTable isPendingData={false} data={[]} />);

    expect(screen.getByText('No tasks found')).toBeInTheDocument();
  });
});
