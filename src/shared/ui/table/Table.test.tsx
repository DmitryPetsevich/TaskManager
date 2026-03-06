import { describe, expect, test } from 'vitest';
import { Table } from '@shared/ui/table/Table';
import { render, screen } from '@testing-library/react';

describe('Table', () => {
  test('Should render children', () => {
    const testId = 'tbody-test-id';

    render(
      <Table>
        <tbody data-testid={testId} />
      </Table>,
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  test('Should merge custom className', () => {
    const className = 'custom-class';
    const testId = 'table-test-id';

    render(<Table className={className} data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass(className);
  });

  test('Should apply scroll styles if scrollHeight is provided', () => {
    const height = 300;

    render(<Table scrollHeight={height} />);

    expect(screen.getByTestId('table-container')).toHaveStyle({
      maxHeight: `${height}px`,
      overflow: 'auto',
    });
  });

  test('Should have no scroll styles if scrollHeight is undefined', () => {
    render(<Table />);

    expect(screen.getByTestId('table-container').style.maxHeight).toBe('');
  });

  test('Should pass additional props', () => {
    const testId = 'table-test-id';
    const ariaLabel = 'test-table';

    render(<Table data-testid={testId} aria-label={ariaLabel} />);

    expect(screen.getByTestId(testId)).toHaveAttribute('aria-label', ariaLabel);
  });
});
