import { clsx } from 'clsx'

import './Table.css'

type TableProps = {
  freezeFirstColumn?: boolean
  freezeHeader?: boolean
  layout?: 'auto' | 'fixed'
  withBorder?: boolean
  children: React.ReactNode
}

export function Table({
  freezeFirstColumn,
  freezeHeader,
  layout = 'auto',
  withBorder,
  children,
}: TableProps) {
  return (
    <div
      data-freeze-first-column={freezeFirstColumn}
      data-freeze-header={freezeHeader}
      className={clsx(
        'table-container',
        withBorder && 'border-brand-300 border',
      )}
    >
      <table
        className={clsx(
          'table',
          layout === 'auto' && 'table-auto',
          layout === 'fixed' && 'table-fixed',
        )}
      >
        {children}
      </table>
    </div>
  )
}
