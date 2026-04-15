import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button:', () => {
  test('Should render children', () => {
    const text = 'Submit';

    render(<Button>{text}</Button>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('Should be disabled when isLoading prop is true', () => {
    render(<Button isLoading>Submit</Button>);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('Should show default loading label when isLoading prop is true', () => {
    render(<Button isLoading>Submit</Button>);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('Should contain right variant classes', () => {
    render(<Button variant="success">Submit</Button>);

    expect(screen.getByRole('button')).toHaveClass('bg-green-700 text-white');
  });

  test('Should call onClick handler', async () => {
    const mockFn = vi.fn();
    const user = userEvent.setup();

    render(<Button onClick={mockFn}>Click</Button>);

    const button = screen.getByRole('button');

    await user.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
