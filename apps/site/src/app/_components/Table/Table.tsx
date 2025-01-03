import { clsx } from 'clsx'

import styles from './Table.module.scss'

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
        styles.tableWrapper,
        withBorder && 'border border-brand-300',
      )}
    >
      <table
        className={clsx(
          styles.table,
          layout === 'auto' && 'table-auto',
          layout === 'fixed' && 'table-fixed',
        )}
      >
        {children}
      </table>
    </div>
  )
}
