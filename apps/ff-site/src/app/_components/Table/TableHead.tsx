import {
  flexRender,
  type HeaderGroup,
  type RowData,
} from '@tanstack/react-table'
import { clsx } from 'clsx'

type TableHeadProps<Data extends RowData> = {
  headerGroups: Array<HeaderGroup<Data>>
  textColor?: 'text-brand-100' | 'text-brand-300'
}

export function TableHead<Data extends RowData>({
  headerGroups,
  textColor = 'text-brand-100',
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
              className={clsx(textColor, meta?.headerCellStyle)}
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
