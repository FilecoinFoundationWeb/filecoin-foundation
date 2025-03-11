import {
  flexRender,
  type HeaderGroup,
  type RowData,
} from '@tanstack/react-table'
import { clsx } from 'clsx'

type TableHeadProps<Data extends RowData> = {
  headerGroups: Array<HeaderGroup<Data>>
}

export function TableHead<Data extends RowData>({
  headerGroups,
}: TableHeadProps<Data>) {
  const firstHeaderGroup = headerGroups[0]
  const { headers } = firstHeaderGroup

  return (
    <thead>
      <tr>
        {headers.map((header) => {
          const { meta } = header.column.columnDef

          return (
            <th
              key={header.id}
              className={clsx(
                meta?.align === 'center' && 'cell-align-center',
                meta?.align === 'right' && 'cell-align-right',
              )}
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
