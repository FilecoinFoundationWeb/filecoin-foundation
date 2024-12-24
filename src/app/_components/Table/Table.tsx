import { clsx } from 'clsx'

type TableProps = {
  children: React.ReactNode
  layout?: 'auto' | 'fixed'
}

export function Table({ children, layout = 'auto' }: TableProps) {
  return (
    <div className="w-full overflow-x-auto focus:brand-outline">
      <table
        className={clsx(
          'w-full border-separate border-spacing-0 rounded-lg border border-brand-300',
          layout === 'auto' && 'table-auto',
          layout === 'fixed' && 'table-fixed',
        )}
      >
        {children}
      </table>
    </div>
  )
}
