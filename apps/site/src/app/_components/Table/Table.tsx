import { clsx } from 'clsx'

import styles from './Table.module.scss'

type TableProps = {
  children: React.ReactNode
  layout?: 'auto' | 'fixed'
  freezeFirstColumn?: boolean
  freezeHeader?: boolean
  borderless?: boolean
}

export function Table({
  children,
  layout = 'auto',
  freezeFirstColumn,
  freezeHeader,
  borderless = true,
}: TableProps) {
  return (
    <div
      data-freeze-first-column={freezeFirstColumn}
      data-freeze-header={freezeHeader}
      className={clsx(
        styles.tableWrapper,
        borderless ? 'border-none' : 'border border-brand-300',
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
