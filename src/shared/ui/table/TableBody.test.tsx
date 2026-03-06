import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { TableBody } from './TableBody';

describe('TableBody', () => {
  test('Should render children', () => {
    const text = 'body-text';

    render(
      <table>
        <TableBody>
          <tr>
            <td>{text}</td>
          </tr>
        </TableBody>
      </table>,
    );

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
