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
  matchButtonWidth?: boolean
  children: React.ReactNode
}

const GAP_BETWEEN_BUTTON_AND_OPTIONS_IN_PX = 8

export function ListboxOptions({
  as = 'ul',
  children,
  position = 'bottom start',
  matchButtonWidth,
}: ListboxOptionsProps) {
  return (
    <HeadlessUIListboxOptions
      transition
      as={as}
      anchor={{ to: position, gap: GAP_BETWEEN_BUTTON_AND_OPTIONS_IN_PX }}
      className={clsx(
        'border-brand-100 bg-brand-800 text-brand-100 focus:brand-outline min-w-[var(--button-width)] rounded-lg border py-2 focus-within:outline-2',
        matchButtonWidth && 'w-[var(--button-width)]',
      )}
    >
      {children}
    </HeadlessUIListboxOptions>
  )
}
