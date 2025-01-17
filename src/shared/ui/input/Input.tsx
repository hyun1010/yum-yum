import React from 'react';

export interface InputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  className = '',
}) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-200 disabled:text-gray-500 ${
          disabled ? 'cursor-not-allowed' : ''
        } transition-all duration-200 ease-in-out border-gray-300 text-gray-700 placeholder-gray-500`}
      />
    </div>
  );
};
Input.displayName = 'Input';
export default Input;
