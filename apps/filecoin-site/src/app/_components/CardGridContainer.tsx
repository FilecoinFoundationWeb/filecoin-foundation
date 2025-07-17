import { clsx } from 'clsx'

type CardGridContainerProps = {
  width: '4xl' | '6xl'
  children: React.ReactNode
}

export function CardGridContainer({ children, width }: CardGridContainerProps) {
  return (
    <div
      className={clsx(
        width === '4xl' && 'max-w-4xl',
        width === '6xl' && 'max-w-6xl',
      )}
    >
      {children}
    </div>
  )
}
