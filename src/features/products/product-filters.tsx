import { Select } from '@/components/select'
import { useCategories } from '@/features/products/hooks/use-categories'

interface ProductFiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  className?: string
}

export function ProductFilters({
  selectedCategory,
  onCategoryChange,
  className = '',
}: ProductFiltersProps) {
  const { options, isLoading } = useCategories()

  return (
    <div className={`flex items-end gap-4 ${className}`}>
      <Select
        options={options}
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        onClear={() => onCategoryChange('')}
        placeholder="All Categories"
        disabled={isLoading}
        className="min-w-3xs"
      />
    </div>
  )
}
