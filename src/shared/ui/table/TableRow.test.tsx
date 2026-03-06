import type { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { TableRow } from '@shared/ui/table/TableRow';

function renderTableRow(ui: ReactNode) {
  return render(
    <table>
      <tbody>{ui}</tbody>
    </table>,
  );
}

describe('TableRow', () => {
  test('Should render children', () => {
    const text = 'row-text';

    renderTableRow(
      <TableRow>
        <td>{text}</td>
      </TableRow>,
    );

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('Should merge custom className', () => {
    const testId = 'table-row-id';
    const className = 'custom-class';

    renderTableRow(<TableRow data-testid={testId} className={className} />);

    expect(screen.getByTestId(testId)).toHaveClass(className);
  });
});
