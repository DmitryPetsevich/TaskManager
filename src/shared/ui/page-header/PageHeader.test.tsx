import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { PageHeader } from '@shared/ui/page-header/PageHeader';

describe('PageHeader', () => {
  test('Should show page title', () => {
    const title = 'page header title';

    render(<PageHeader title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test('Should render action component if action prop is provided', () => {
    const testId = 'action-test-id';

    render(<PageHeader title={'title'} action={<button data-testid={testId} />} />);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test('Should render skeleton if title is not provided', () => {
    render(<PageHeader />);

    expect(screen.getByTestId('page-header-skeleton')).toBeInTheDocument();
  });
});
