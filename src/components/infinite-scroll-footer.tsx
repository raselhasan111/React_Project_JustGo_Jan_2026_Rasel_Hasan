import { forwardRef } from 'react'

interface InfiniteScrollFooterProps {
  isFetchingNextPage: boolean
  hasNextPage: boolean
  hasData: boolean
  isLoading: boolean
  loadingMessage?: string
  endMessage?: string
}

export const InfiniteScrollFooter = forwardRef<
  HTMLDivElement,
  InfiniteScrollFooterProps
>(
  (
    {
      isFetchingNextPage,
      hasNextPage,
      hasData,
      isLoading,
      loadingMessage = 'Loading more...',
      endMessage = 'No more items to load',
    },
    ref
  ) => {
    return (
      <>
        {/* Intersection Observer Target */}
        <div ref={ref} className="h-4" />

        {/* Loading indicator for fetching more items */}
        {isFetchingNextPage && (
          <div className="flex items-center justify-center pb-4">
            <p className="text-gray-600">{loadingMessage}</p>
          </div>
        )}

        {/* End of list indicator */}
        {!hasNextPage && hasData && !isLoading && (
          <div className="flex items-center justify-center pb-4">
            <p className="text-gray-500 text-sm">{endMessage}</p>
          </div>
        )}
      </>
    )
  }
)

InfiniteScrollFooter.displayName = 'InfiniteScrollFooter'
