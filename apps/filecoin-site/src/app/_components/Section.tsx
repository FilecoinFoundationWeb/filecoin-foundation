import { clsx } from 'clsx'

type BackgroundVariant = keyof typeof backgroundVariants

export type SectionProps = {
  backgroundVariant: BackgroundVariant
  as?: React.ElementType
  children: React.ReactNode
}

export const backgroundVariants = {
  dark: 'dark-section bg-zinc-950',
  gray: 'light-section bg-gray-200',
  light: 'light-section bg-white',
  transparent: 'light-section bg-transparent',
  transparentDark: 'dark-section bg-transparent',
} as const

export function Section({
  children,
  backgroundVariant = 'transparent',
  as: Tag = 'section',
}: SectionProps) {
  return (
    <Tag
      className={clsx(
        'text-[var(--text-color-accent)]',
        backgroundVariants[backgroundVariant],
      )}
    >
      {children}
    </Tag>
  )
}
