import { clsx } from 'clsx'

type ContainerProps = {
  children: React.ReactNode
  bg?: keyof typeof variants
}

const variants = {
  transparent: 'bg-transparent',
  gray: 'bg-gray-200',
  dark: 'bg-zinc-950',
} as const

export function Container({ children, bg = 'transparent' }: ContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto max-w-[1440px] px-8 md:px-12 lg:px-16',
        variants[bg],
      )}
    >
      {children}
    </div>
  )
}
