import clsx from 'clsx';
import { createPortal } from 'react-dom';
import { useState, useRef, useEffect, type CSSProperties, useCallback, useMemo } from 'react';

export type SelectOption = {
  label: string;
  value: string;
};

type SelectBaseProps = {
  label: string;
  options: SelectOption[];
  error?: string;
  placeholder?: string;
  closeOnSelect?: boolean;
  maxVisibleTags?: number;
};

type SelectSingleProps = {
  multiple?: false;
  value?: string;
  onChange?: (value: string) => void;
};

type SelectMultipleProps = {
  multiple: true;
  value?: string[];
  onChange?: (value: string[]) => void;
};

type SelectProps = SelectBaseProps & (SelectSingleProps | SelectMultipleProps);

export const Select = ({
  options,
  label,
  value,
  onChange,
  error,
  placeholder = 'Select...',
  multiple,
  closeOnSelect,
  maxVisibleTags = 3,
}: SelectProps) => {
  const isMultiple = multiple === true;

  const shouldCloseOnSelect = closeOnSelect ?? !isMultiple;

  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [dropdownStyles, setDropdownStyles] = useState<CSSProperties>({});

  const selectedValues = useMemo<string[]>(() => {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  }, [value]);

  const selectedLabels = useMemo(() => {
    const set = new Set(selectedValues);

    return options.filter((opt) => set.has(opt.value)).map((opt) => opt.label);
  }, [options, selectedValues]);

  const toggleDropdown = useCallback(() => {
    if (!options.length) return;

    setIsOpen((prev) => !prev);
  }, [options.length]);

  const handleSelect = useCallback(
    (option: SelectOption) => {
      const set = new Set(selectedValues);
      const exists = set.has(option.value);

      if (isMultiple) {
        const newValue = exists
          ? selectedValues.filter((v) => v !== option.value)
          : [...selectedValues, option.value];

        onChange?.(newValue);
      } else {
        onChange?.(option.value);
      }

      if (shouldCloseOnSelect) {
        setIsOpen(false);
      }
    },
    [onChange, isMultiple, selectedValues, shouldCloseOnSelect],
  );

  const updatePosition = useCallback(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();

      setDropdownStyles({
        position: 'fixed',
        top: rect.bottom + 8,
        left: rect.left,
        width: rect.width,
        zIndex: 9999,
      });
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      updatePosition();

      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
    }

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen, updatePosition]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const displayValue = useMemo(() => {
    if (options.length === 0) return 'No options';

    if (selectedLabels.length === 0) return placeholder;

    if (!isMultiple) return selectedLabels[0];

    const visible = selectedLabels.slice(0, maxVisibleTags);
    const rest = selectedLabels.length - visible.length;

    return rest > 0 ? `${visible.join(', ')} +${rest}` : visible.join(', ');
  }, [selectedLabels, isMultiple, maxVisibleTags, placeholder, options.length]);

  return (
    <div className="flex flex-col gap-1 mb-4 last:mb-0">
      <span className="text-sm text-gray-400">{label}</span>

      <button
        type="button"
        ref={buttonRef}
        onClick={toggleDropdown}
        disabled={options.length === 0}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="select-dropdown"
        className={clsx(
          'w-full px-4 py-2.5 bg-white/20 border border-gray-400 rounded-sm text-left',
          'focus:outline-none focus:ring-2 focus:ring-blue-800',
          error && 'border-red-500 focus:ring-red-500',
          selectedValues.length === 0 && 'text-gray-400 italic',
        )}
      >
        {displayValue}
      </button>

      {error && <span className="text-sm text-red-500">{error}</span>}

      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            id="select-dropdown"
            style={dropdownStyles}
            className="bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto"
            role="listbox"
            aria-multiselectable={isMultiple || undefined}
          >
            {options.map((option) => {
              const selected = selectedValues.includes(option.value);

              return (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option)}
                  role="option"
                  aria-selected={selected}
                  className={clsx(
                    'px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center justify-between',
                    selected && 'bg-blue-100',
                  )}
                >
                  <span>{option.label}</span>

                  {isMultiple && selected && <span>✓</span>}
                </div>
              );
            })}
          </div>,
          document.body,
        )}
    </div>
  );
};
