import { clsx } from 'clsx'

type StateCardProps = {
  children: React.ReactNode
  border: 'dashed' | 'solid'
  background?: 'subtle'
}

export function StateCard({ children, border, background }: StateCardProps) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center rounded-xl px-6 py-15',
        border === 'dashed' &&
          'border border-dashed border-(--state-card-border-color)',
        border === 'solid' &&
          'border border-solid border-(--state-card-border-color)',
        background === 'subtle' && 'bg-(--state-card-background-color)',
      )}
    >
      {children}
    </div>
  )
}
