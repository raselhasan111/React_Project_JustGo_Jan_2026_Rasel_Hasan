import { useRouteSearchParams } from '../../../hooks/use-route-search-params'

export function useProductParams() {
  const { getParam, updateParams } = useRouteSearchParams()

  const query = getParam('q')
  const category = getParam('category')

  const setCategory = (newCategory: string) => {
    updateParams({ category: newCategory })
  }

  const setSearch = (newQuery: string) => {
    updateParams({ q: newQuery })
  }

  return {
    query,
    category,
    setCategory,
    setSearch,
  }
}
