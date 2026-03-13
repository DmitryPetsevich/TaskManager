import { render, screen } from '@testing-library/react';
import { describe, expect, vi, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import { SidebarHeader } from '@widgets/sidebar/SidebarHeader';

describe('SidebarHeader', () => {
  const mockFn = vi.fn();

  test('Should render toggle button', () => {
    render(<SidebarHeader collapsed={false} onToggle={mockFn} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Should call onToggle when button is clicked', async () => {
    const user = userEvent.setup();

    render(<SidebarHeader collapsed={false} onToggle={mockFn} />);

    await user.click(screen.getByRole('button'));

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
