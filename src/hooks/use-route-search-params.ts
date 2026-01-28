import { useSearchParams } from 'react-router-dom'

export function useRouteSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams()

  const getParam = (key: string) => searchParams.get(key) || ''

  const updateParams = (
    newParams: Record<string, string | null | undefined>
  ) => {
    const params = new URLSearchParams(searchParams)

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null || value === undefined || value === '') {
        params.delete(key)
      } else {
        params.set(key, value)
      }
    })

    setSearchParams(params)
  }

  return {
    searchParams,
    getParam,
    updateParams,
  }
}
