import React from 'react'
import { CloseIcon } from '../assets/icons'

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: SelectOption[]
  placeholder?: string
  onClear?: () => void
}

export function Select({
  label,
  options,
  placeholder,
  className = '',
  id,
  onClear,
  value,
  ...props
}: SelectProps) {
  const selectId =
    id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)
  const hasValue = value && value !== ''

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className="block w-full py-2 px-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-position-[right_0.5rem_center] bg-size-[1.5em_1.5em] bg-no-repeat pr-10"
          value={value}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {hasValue && onClear && (
          <div
            onClick={() => onClear()}
            className="absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <CloseIcon className="w-4 h-4 text-gray-500 hover:text-gray-700" />
          </div>
        )}
      </div>
    </div>
  )
}
