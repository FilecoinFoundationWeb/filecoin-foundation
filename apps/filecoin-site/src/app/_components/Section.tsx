import { clsx } from 'clsx'

export type SectionProps = {
  children: React.ReactNode
  as?: React.ElementType
  backgroundVariant?: keyof typeof backgroundVariants
}

const backgroundVariants = {
  transparent: 'bg-transparent',
  gray: 'bg-gray-200',
  dark: 'bg-zinc-950',
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
