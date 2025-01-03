import { clsx } from 'clsx'

import styles from './Table.module.scss'

type TableProps = {
  children: React.ReactNode
  layout?: 'auto' | 'fixed'
  freezeFirstColumn?: boolean
}

export function Table({
  children,
  layout = 'auto',
  freezeFirstColumn,
}: TableProps) {
  return (
    <div className={styles.tableWrapper}>
      <table
        data-freeze-first-column={freezeFirstColumn}
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
