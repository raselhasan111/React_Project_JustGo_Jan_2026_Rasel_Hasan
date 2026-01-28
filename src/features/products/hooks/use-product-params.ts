import { type SortDirection } from '../../../components/data-table'
import { useRouteSearchParams } from '../../../hooks/use-route-search-params'

export function useProductParams() {
  const { getParam, updateParams } = useRouteSearchParams()

  const query = getParam('q')
  const category = getParam('category')
  const sortBy = getParam('sortBy')
  const sortOrderParam = getParam('sortOrder') as 'asc' | 'desc' | ''
  const sortOrder: SortDirection = sortOrderParam || null

  const setCategory = (newCategory: string) => {
    updateParams({ category: newCategory })
  }

  const setSearch = (newQuery: string) => {
    updateParams({ q: newQuery })
  }

  const setSort = (key: string, direction: SortDirection) => {
    if (direction) {
      updateParams({ sortBy: key, sortOrder: direction })
    } else {
      updateParams({ sortBy: '', sortOrder: '' })
    }
  }

  return {
    query,
    category,
    sortBy,
    sortOrder,
    setCategory,
    setSearch,
    setSort,
  }
}
