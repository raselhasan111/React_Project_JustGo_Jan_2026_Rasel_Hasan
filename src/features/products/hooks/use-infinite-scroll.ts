import { fetchProducts, fetchProductsByCategory } from '@/api/products'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useCallback, useEffect, useMemo, useRef } from 'react'

const ITEMS_PER_PAGE = 20

interface UseInfiniteScrollOptions {
  category?: string
  query?: string
}

export function useInfiniteScroll({
  category,
  query,
}: UseInfiniteScrollOptions) {
  const observerTarget = useRef<HTMLDivElement>(null)

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ['products', 'infinite', category, query],
    queryFn: ({ pageParam = 0 }) => {
      // pageParam represents the skip value
      if (category) {
        return fetchProductsByCategory(category, ITEMS_PER_PAGE, pageParam)
      }
      return fetchProducts(ITEMS_PER_PAGE, pageParam, query)
    },
    getNextPageParam: (lastPage, allPages) => {
      const totalFetched = allPages.reduce(
        (sum, page) => sum + page.products.length,
        0
      )
      return totalFetched < lastPage.total ? totalFetched : undefined
    },
    initialPageParam: 0,
  })

  // Flatten all pages into a single array
  const products = useMemo(() => {
    return data?.pages.flatMap((page) => page.products) ?? []
  }, [data])

  // Intersection Observer for infinite scroll
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage()
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  )

  useEffect(() => {
    const element = observerTarget.current
    if (!element) return

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '100px',
      threshold: 0.1,
    })

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [handleObserver])

  return {
    products,
    isLoading,
    error,
    isFetchingNextPage,
    hasNextPage,
    observerTarget,
  }
}
