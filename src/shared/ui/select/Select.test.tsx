import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Select } from '@shared/ui/select/Select';
import userEvent from '@testing-library/user-event';

describe('Select', () => {
  test('Should render placeholder when value is not selected', () => {
    render(<Select label="Fruit" options={[{ label: 'Apple', value: 'apple' }]} />);

    expect(screen.getByText('Select...')).toBeInTheDocument();
  });

  test('Should render "No options" if options are empty', () => {
    render(<Select label="Fruit" options={[]} />);

    expect(screen.getByText('No options')).toBeInTheDocument();
  });

  test('Should disable button if options are empty', () => {
    render(<Select label="Fruit" options={[]} />);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('Should render selected value (single mode)', () => {
    const option = { label: 'Apple', value: 'apple' };

    render(<Select label="Fruit" options={[option]} value={option.value} />);

    expect(screen.getByText(option.label)).toBeInTheDocument();
  });

  test('Should render selected values (multiple mode)', () => {
    render(
      <Select
        label="Fruit"
        multiple
        options={[
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
        ]}
        value={['apple', 'banana']}
      />,
    );

    expect(screen.getByText('Apple, Banana')).toBeInTheDocument();
  });

  test('Should display error message if error is provided', () => {
    const error = 'Error Message!';

    render(<Select label="Fruit" options={[{ label: 'Apple', value: 'apple' }]} error={error} />);

    expect(screen.getByText(error)).toBeInTheDocument();
  });

  test('Should open dropdown after click', async () => {
    render(<Select label="Fruit" options={[{ label: 'Apple', value: 'apple' }]} />);

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  test('Should close dropdown after selection (single mode)', async () => {
    render(<Select label="Fruit" options={[{ label: 'Apple', value: 'apple' }]} />);

    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByRole('option'));

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  test('Should close dropdown on outside click', async () => {
    render(<Select label="Fruit" options={[{ label: 'Apple', value: 'apple' }]} />);

    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(document.body);

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  test('Should not close dropdown when closeOnSelect is false', async () => {
    render(
      <Select label="Fruit" options={[{ label: 'Apple', value: 'apple' }]} closeOnSelect={false} />,
    );

    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByText('Apple'));

    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  test('Should call onChange with correct value (single mode)', async () => {
    const onChange = vi.fn();
    const option = { label: 'Apple', value: 'apple' };

    render(<Select label="Fruit" options={[option]} onChange={onChange} />);

    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByText(option.label));

    expect(onChange).toHaveBeenCalledWith(option.value);
  });

  test('Should call onChange with correct value (multiple mode)', async () => {
    const onChange = vi.fn();

    render(
      <Select
        label="Fruit"
        multiple
        options={[
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
        ]}
        value={['apple']}
        onChange={onChange}
      />,
    );

    await userEvent.click(screen.getByRole('button'));
    await userEvent.click(screen.getByText('Banana'));

    expect(onChange).toHaveBeenCalledWith(['apple', 'banana']);
  });
});
