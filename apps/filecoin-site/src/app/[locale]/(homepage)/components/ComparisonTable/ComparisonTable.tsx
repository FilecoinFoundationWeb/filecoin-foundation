import type { ColumnPropsData } from './Column'
import { Column } from './Column'

type ComparisonTableProps = {
  columns: [ColumnPropsData, ColumnPropsData]
}

export function ComparisonTable({ columns }: ComparisonTableProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {columns.map((column, index) => (
        <Column
          key={column.title}
          perspective={index === 0 ? 'advantage' : 'disadvantage'}
          {...column}
        />
      ))}
    </div>
  )
}
