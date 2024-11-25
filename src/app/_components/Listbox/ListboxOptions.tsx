import type { ElementType } from 'react'

import {
  ListboxOptions as HeadlessUIListboxOptions,
  type ListboxOptionsProps as HeadlessUIListboxOptionsProps,
} from '@headlessui/react'
import { clsx } from 'clsx'

type HeadlessUIAnchorProps = NonNullable<
  HeadlessUIListboxOptionsProps['anchor']
>
type Position = Extract<HeadlessUIAnchorProps, string>

export type ListboxOptionsProps = {
  as?: ElementType
  position?: Position
  width?: keyof typeof widthClasses
  children: React.ReactNode
}

const GAP_BETWEEN_BUTTON_AND_OPTIONS_IN_PX = 8

const widthClasses = {
  auto: 'w-auto',
  button: 'w-[var(--button-width)]',
} as const

export function ListboxOptions({
  as = 'ul',
  children,
  position = 'bottom start',
  width = 'auto',
}: ListboxOptionsProps) {
  return (
    <HeadlessUIListboxOptions
      transition
      as={as}
      anchor={{ to: position, gap: GAP_BETWEEN_BUTTON_AND_OPTIONS_IN_PX }}
      className={clsx(
        'min-w-[var(--button-width)] rounded-lg border border-brand-100 bg-brand-800 py-2 text-brand-100 focus:brand-outline focus-within:outline-2',
        widthClasses[width],
      )}
    >
      {children}
    </HeadlessUIListboxOptions>
  )
}
