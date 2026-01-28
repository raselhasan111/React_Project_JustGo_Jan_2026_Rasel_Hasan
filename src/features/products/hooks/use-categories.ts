import { useQuery } from '@tanstack/react-query'
import { fetchCategories } from '../../../api/products'
import { type SelectOption } from '../../../components/select'

export function useCategories() {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  })

  const options: SelectOption[] =
    categories?.map((cat: string) => ({
      value: cat,
      label: cat
        .split('-')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    })) || []

  return {
    categories: categories || [],
    options,
    isLoading,
    error,
  }
}
