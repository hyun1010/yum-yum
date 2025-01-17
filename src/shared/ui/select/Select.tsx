import React, { useId } from 'react';

export interface SelectProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  required = false,
  disabled = false,
  className = '',
}) => {
  const id = useId();

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-200 disabled:text-gray-500 ${
          disabled ? 'cursor-not-allowed' : ''
        } transition-all duration-200 ease-in-out border-gray-300 text-gray-700 placeholder-gray-500`}
      >
        <option value="" disabled>
          선택하세요
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.displayName = 'Select';
export default Select;
