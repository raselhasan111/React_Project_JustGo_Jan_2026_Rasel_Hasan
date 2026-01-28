import { type ReactNode } from 'react'

export interface RadioOption<T extends string | number> {
  label: ReactNode
  value: T
}

interface RadioGroupProps<T extends string | number> {
  options: RadioOption<T>[]
  value: T
  onChange: (value: T) => void
  name: string
  className?: string
}

export function RadioGroup<T extends string | number>({
  options,
  value,
  onChange,
  name,
  className = '',
}: RadioGroupProps<T>) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-sm font-medium text-gray-900">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  )
}
