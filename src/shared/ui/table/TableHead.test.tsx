import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { TableHead } from './TableHead';

describe('TableHead', () => {
  test('Should render children', () => {
    const text = 'head-text';

    render(
      <table>
        <TableHead>
          <tr>
            <th>{text}</th>
          </tr>
        </TableHead>
      </table>,
    );

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
