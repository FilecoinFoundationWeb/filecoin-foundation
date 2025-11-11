import { clsx } from 'clsx'

type StatusBadgeProps = {
  status: 'active' | 'inactive'
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const isActive = status === 'active'

  return (
    <div className="flex items-center gap-1.5">
      <span
        className={clsx(
          'size-2.5 rounded-full border-2',
          isActive
            ? 'bg-brand-600 border-brand-400'
            : 'bg-zinc-500 border-zinc-300',
        )}
        aria-hidden="true"
      />

      <p
        className={clsx(
          'font-medium',
          isActive ? 'text-brand-950' : 'text-zinc-600',
        )}
      >
        {status === 'active' ? 'Active' : 'Inactive'}
      </p>
    </div>
  )
}
