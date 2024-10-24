import { clsx } from 'clsx'

type TableProps = {
  children: React.ReactNode
  layout?: 'auto' | 'fixed'
}

export function Table({ children, layout = 'auto' }: TableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table
        className={clsx(
          'w-full',
          layout === 'auto' && 'table-auto',
          layout === 'fixed' && 'table-fixed',
        )}
      >
        {children}
      </table>
    </div>
  )
}
