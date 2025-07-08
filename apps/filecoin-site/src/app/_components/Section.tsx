import { clsx } from 'clsx'

export type SectionProps = {
  backgroundVariant: keyof typeof backgroundVariants
  as?: React.ElementType
  children: React.ReactNode
}

const backgroundVariants = {
  dark: 'bg-zinc-950',
  gray: 'bg-gray-200',
  light: 'bg-white',
  transparent: 'bg-transparent',
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
