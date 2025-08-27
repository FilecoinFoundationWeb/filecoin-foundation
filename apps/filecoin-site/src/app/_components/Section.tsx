import { clsx } from 'clsx'

import { BackgroundVariantContextProvider } from './BackgroundVariantContext'

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
  backgroundVariant,
  as: Tag = 'section',
}: SectionProps) {
  return (
    <BackgroundVariantContextProvider value={backgroundVariant}>
      <Tag
        className={clsx(
          'text-[var(--color-text-base)]',
          backgroundVariants[backgroundVariant],
        )}
      >
        {children}
      </Tag>
    </BackgroundVariantContextProvider>
  )
}
