import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectsTable } from '@widgets/projects-table/ProjectsTable';

describe('ProjectsTable', () => {
  test('Should render skeleton when isPending is true and data is empty', () => {
    render(<ProjectsTable isPendingData={true} data={[]} />);

    expect(screen.getByTestId('table-skeleton-id')).toBeInTheDocument();
  });

  test('Should render message "No projects found" if first request is completed and data is empty', () => {
    render(<ProjectsTable isPendingData={false} data={[]} />);

    expect(screen.getByText('No projects found')).toBeInTheDocument();
  });
});
