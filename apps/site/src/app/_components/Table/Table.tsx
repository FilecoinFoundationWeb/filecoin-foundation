import { clsx } from 'clsx'

import styles from './Table.module.scss'

type TableProps = {
  children: React.ReactNode
  layout?: 'auto' | 'fixed'
  freezeFirstColumn?: boolean
  freezeHeader?: boolean
}

export function Table({
  children,
  layout = 'auto',
  freezeFirstColumn,
  freezeHeader,
}: TableProps) {
  return (
    <div
      className={styles.tableWrapper}
      data-freeze-first-column={freezeFirstColumn}
      data-freeze-header={freezeHeader}
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
