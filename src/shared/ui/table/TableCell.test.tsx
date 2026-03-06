import type { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { TableCell } from '@shared/ui/table/TableCell';

function renderTableCell(ui: ReactNode) {
  return render(
    <table>
      <tbody>
        <tr>{ui}</tr>
      </tbody>
    </table>,
  );
}

describe('TableCell', () => {
  const text = 'text';
  const testId = 'table-cell-id';

  test('Should render children', () => {
    renderTableCell(<TableCell>{text}</TableCell>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('Should apply right alignment class', () => {
    renderTableCell(<TableCell align="center" data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass('text-center');
  });

  test('Should merge custom className', () => {
    const className = 'custom-class';

    renderTableCell(<TableCell className={className} data-testid={testId} />);

    expect(screen.getByTestId(testId)).toHaveClass(className);
  });
});
