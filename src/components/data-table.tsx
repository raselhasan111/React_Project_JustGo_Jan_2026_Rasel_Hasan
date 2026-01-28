import { useDeferredValue } from 'react'

export type SortDirection = 'asc' | 'desc' | null

interface Column<T> {
  key: string
  header: string
  render?: (item: T) => React.ReactNode
  sortable?: boolean
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  isLoading?: boolean
  error?: Error | null
  onRowClick?: (item: T) => void
  rowKey: keyof T
  onSort?: (key: string, direction: SortDirection) => void
  sortBy?: string
  sortOrder?: SortDirection
}

export function DataTable<T extends object>({
  data,
  columns,
  isLoading,
  error,
  onRowClick,
  rowKey,
  onSort,
  sortBy,
  sortOrder,
}: DataTableProps<T>) {
  const deferredData = useDeferredValue(data)

  const handleSort = (columnKey: string) => {
    let newDirection: SortDirection = 'asc'

    if (sortBy === columnKey) {
      if (sortOrder === 'asc') {
        newDirection = 'desc'
      } else if (sortOrder === 'desc') {
        newDirection = null
      }
    }

    onSort?.(columnKey, newDirection)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-gray-600">Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-red-600">Error: {error.message}</p>
      </div>
    )
  }

  if (deferredData.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-gray-600">No data available</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((column) => (
              <th
                key={column.key}
                className={`border border-gray-300 px-4 py-2 text-left font-semibold ${
                  column.sortable
                    ? 'cursor-pointer select-none hover:bg-gray-200'
                    : ''
                }`}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className="flex items-center gap-2">
                  {column.header}
                  {column.sortable && (
                    <span className="text-lg">
                      {sortBy === column.key
                        ? sortOrder === 'asc'
                          ? '↑'
                          : '↓'
                        : '↕'}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {deferredData.map((item) => (
            <tr
              key={String(item[rowKey])}
              onClick={() => onRowClick?.(item)}
              className={`hover:bg-gray-50 transition-colors ${
                onRowClick ? 'cursor-pointer' : ''
              }`}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="border border-gray-300 px-4 py-2"
                >
                  {column.render
                    ? column.render(item)
                    : String(
                        (item as Record<string, unknown>)[column.key] ?? ''
                      )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
