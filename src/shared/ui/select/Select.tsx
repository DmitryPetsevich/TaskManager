import clsx from 'clsx';
import { createPortal } from 'react-dom';
import { useState, useRef, useEffect, type CSSProperties, useCallback } from 'react';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const Select = ({
  options,
  label,
  value,
  onChange,
  error,
  placeholder = 'Select...',
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [dropdownStyles, setDropdownStyles] = useState<CSSProperties>({});

  const selectedOption = options.find((opt) => opt.value === value);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (option: Option) => {
    if (onChange) {
      onChange(option.value);
    }
    setIsOpen(false);
  };

  const updatePosition = useCallback(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownStyles({
        position: 'absolute',
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX,
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

  return (
    <div className="flex flex-col gap-1 mb-4 last:mb-0">
      <span className="text-sm text-gray-400">{label}</span>
      <button
        type="button"
        ref={buttonRef}
        onClick={toggleDropdown}
        className={clsx(
          'w-full px-4 py-2.5 bg-white/20 border border-gray-400 rounded-sm text-left',
          'focus:outline-none focus:ring-2 focus:ring-blue-800',
          error && 'border-red-500 focus:ring-red-500',
          !selectedOption && 'text-gray-400 italic',
        )}
        data-testid="select-button-id"
      >
        {selectedOption ? selectedOption.label : placeholder}
      </button>

      {error && (
        <span className="text-sm text-red-500" data-testid="select-error-id">
          {error}
        </span>
      )}

      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            style={dropdownStyles}
            className="bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto"
            tabIndex={-1}
            data-testid="select-dropdown-id"
          >
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className={clsx(
                  'px-4 py-2 cursor-pointer hover:bg-gray-100',
                  selectedOption?.value === option.value && 'bg-blue-100',
                )}
                data-testid="select-option-id"
              >
                {option.label}
              </div>
            ))}
          </div>,
          document.body,
        )}
    </div>
  );
};
