import { clsx } from 'clsx'

export type SectionProps = {
  children: React.ReactNode
  as?: React.ElementType
  bg?: keyof typeof variants
}

const variants = {
  transparent: 'bg-transparent',
  gray: 'bg-gray-200',
  dark: 'bg-zinc-950',
} as const

export function Section({
  children,
  bg = 'transparent',
  as: Tag = 'section',
}: SectionProps) {
  return <Tag className={clsx(variants[bg])}>{children}</Tag>
}
