import { flexRender, type RowModel, type RowData } from '@tanstack/react-table'
import { clsx } from 'clsx'

import styles from './Table.module.scss'

type TableBodyProps<Data extends RowData> = {
  rowModel: RowModel<Data>
}

export function TableBody<Data extends RowData>({
  rowModel,
}: TableBodyProps<Data>) {
  const { rows } = rowModel

  return (
    <tbody className="border-t border-brand-500">
      {rows.map((row) => (
        <tr key={row.id} className={clsx(styles.row, 'odd:bg-brand-700')}>
          {row.getVisibleCells().map((cell) => {
            const { meta } = cell.column.columnDef

            return (
              <td
                key={cell.id}
                className={clsx(styles.cell, meta?.bodyCellStyle)}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            )
          })}
        </tr>
      ))}
    </tbody>
  )
}
