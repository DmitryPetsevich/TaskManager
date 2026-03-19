import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Select } from '@shared/ui/select/Select';
import userEvent from '@testing-library/user-event';

describe('Select', () => {
  test('Should render placeholder when value is not selected', () => {
    render(<Select label="Fruit" options={[{ label: 'Apple', value: 'apple' }]} />);

    expect(screen.getByText('Select...')).toBeInTheDocument();
  });

  test('Should render selected value', () => {
    const option = { label: 'Apple', value: 'apple' };

    render(<Select label="Fruit" options={[option]} value={option.value} />);

    expect(screen.getByText(option.label)).toBeInTheDocument();
  });

  test('Should open dropdown after click', async () => {
    render(<Select label="Fruit" options={[{ label: 'Apple', value: 'apple' }]} />);

    await userEvent.click(screen.getByTestId('select-button-id'));

    expect(screen.getByTestId('select-dropdown-id')).toBeInTheDocument();
  });

  test('Should call onChange when option is selected', async () => {
    const onChange = vi.fn();

    render(
      <Select label="Fruit" options={[{ label: 'Apple', value: 'apple' }]} onChange={onChange} />,
    );

    await userEvent.click(screen.getByTestId('select-button-id'));
    await userEvent.click(screen.getByTestId('select-option-id'));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('Should close dropdown after selection', async () => {
    render(<Select label="Fruit" options={[{ label: 'Apple', value: 'apple' }]} />);

    await userEvent.click(screen.getByTestId('select-button-id'));
    await userEvent.click(screen.getByTestId('select-option-id'));

    expect(screen.queryByTestId('select-dropdown-id')).not.toBeInTheDocument();
  });

  test('Should display error message if error is provided', () => {
    const error = 'Error Message!';

    render(<Select label="Fruit" options={[{ label: 'Apple', value: 'apple' }]} error={error} />);

    expect(screen.getByText(error)).toBeInTheDocument();
  });
});
