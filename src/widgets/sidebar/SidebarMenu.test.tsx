import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SidebarMenu } from './SidebarMenu';
import { sidebarMenu } from './SidebarMenu.config';

describe('SidebarMenu', () => {
  test('Should render all menu items', () => {
    render(
      <MemoryRouter>
        <SidebarMenu collapsed={false} />
      </MemoryRouter>,
    );

    sidebarMenu.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  test('Should hide text when collapsed', () => {
    render(
      <MemoryRouter>
        <SidebarMenu collapsed={true} />
      </MemoryRouter>,
    );

    sidebarMenu.forEach((item) => {
      expect(screen.getByText(item.label)).toHaveClass('opacity-0');
    });
  });

  test('Should render NavLink with correct href', () => {
    render(
      <MemoryRouter>
        <SidebarMenu collapsed={false} />
      </MemoryRouter>,
    );

    sidebarMenu.forEach((item) => {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute('href', item.to);
    });
  });

  test('Should apply active class to the current route', () => {
    const activePath = sidebarMenu[0].to;

    render(
      <MemoryRouter initialEntries={[activePath]}>
        <SidebarMenu collapsed={false} />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: sidebarMenu[0].label })).toHaveClass('bg-gray-200');
  });
});
