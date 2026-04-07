import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
vi.mock('@features/auth/logout', () => ({
  LogoutButton: () => <button>Logout</button>,
}));
import { SidebarFooter } from './SidebarFooter';

describe('SidebarFooter', () => {
  test('Should render logout button', () => {
    render(<SidebarFooter />);

    expect(screen.getByText('Logout')).toBeInTheDocument();
  });
});
