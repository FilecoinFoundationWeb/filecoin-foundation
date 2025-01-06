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
    <tbody>
      {rows.map((row) => (
        <tr key={row.id} className={styles.row}>
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
