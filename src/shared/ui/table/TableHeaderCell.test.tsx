import type { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { TableHeaderCell } from '@shared/ui/table/TableHeaderCell';

function renderTableHeaderCell(ui: ReactNode) {
  return render(
    <table>
      <thead>
        <tr>{ui}</tr>
      </thead>
    </table>,
  );
}

describe('TableHeaderCell', () => {
  const text = 'text';
  const testId = 'testId';

  test('Should render children', () => {
    renderTableHeaderCell(<TableHeaderCell>{text}</TableHeaderCell>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('Should apply right alignment class', () => {
    renderTableHeaderCell(<TableHeaderCell align="right" />);

    expect(screen.getByTestId('children-container-id')).toHaveClass('justify-end');
  });

  test('Should merge custom className', () => {
    const className = 'custom-class';

    renderTableHeaderCell(<TableHeaderCell className={className} data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass(className);
  });

  test('Should have sticky styles by default', () => {
    renderTableHeaderCell(<TableHeaderCell data-testid={testId} />);

    const th = screen.getByTestId(testId);

    expect(th).toHaveClass('sticky');
    expect(th).toHaveClass('top-0');
    expect(th).toHaveClass('z-10');
  });

  test('Should have no sticky classes if sticky prop is false', () => {
    renderTableHeaderCell(<TableHeaderCell data-testid={testId} sticky={false} />);

    const th = screen.getByTestId(testId);

    expect(th).not.toHaveClass('sticky');
    expect(th).not.toHaveClass('top-0');
    expect(th).not.toHaveClass('z-10');
  });
});
