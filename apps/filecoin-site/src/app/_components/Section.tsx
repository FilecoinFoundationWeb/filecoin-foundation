import { clsx } from 'clsx'

export type SectionProps = {
  backgroundVariant: keyof typeof backgroundVariants
  as?: React.ElementType
  children: React.ReactNode
}

export type LimitedBackgroundVariant = Extract<
  typeof backgroundVariants,
  'light' | 'dark'
>

const backgroundVariants = {
  dark: 'dark-section bg-zinc-950 text-zinc-50',
  gray: 'gray-section bg-gray-200 text-zinc-950',
  light: 'light-section bg-white text-zinc-950',
  transparent: 'bg-transparent text-zinc-950',
  transparentDark: 'bg-transparent text-zinc-50',
} as const

export function Section({
  children,
  backgroundVariant = 'transparent',
  as: Tag = 'section',
}: SectionProps) {
  return (
    <Tag className={clsx(backgroundVariants[backgroundVariant])}>
      {children}
    </Tag>
  )
}
