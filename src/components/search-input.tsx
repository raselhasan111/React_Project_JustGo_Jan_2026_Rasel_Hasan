import { SearchIcon } from '@/assets/icons'
import { useDebouncedValue } from '@/hooks/use-debounce'
import { useEffect, useState } from 'react'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function SearchInput({
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
}: SearchInputProps) {
  const [searchValue, setSearchValue] = useState(value)
  const debouncedSearchValue = useDebouncedValue(searchValue, 300)

  useEffect(() => {
    setSearchValue(value)
  }, [value])

  useEffect(() => {
    if (debouncedSearchValue !== value) {
      onChange(debouncedSearchValue)
    }
  }, [debouncedSearchValue, value, onChange])

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon className="w-4 h-4 text-gray-500" />
      </div>
      <input
        type="search"
        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  )
}
