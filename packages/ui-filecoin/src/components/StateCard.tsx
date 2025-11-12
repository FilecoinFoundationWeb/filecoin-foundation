import { clsx } from 'clsx'

type StateCardProps = {
  variant: 'solid' | 'outlined'
  children: React.ReactNode
}

export function StateCard({ variant, children }: StateCardProps) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center rounded-xl px-6 py-15',
        variant === 'solid' && 'border border-zinc-200 bg-zinc-100',
        variant === 'outlined' && 'border border-dashed border-zinc-400',
      )}
    >
      {children}
    </div>
  )
}
