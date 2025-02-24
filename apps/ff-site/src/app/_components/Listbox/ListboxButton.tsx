import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'
import { ListboxButton as HeadlessUIListboxButton } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { type BreakpointValue } from '@/types/tailwindTypes'


export type ListboxButtonProps = {
  text: string
  leadingIcon?: IconProps['component']
  compactBelow?: BreakpointValue
  hasError?: boolean
}

type LayoutVariant = {
  full: string
  compact: string
}

type BreakpointStyles = Record<BreakpointValue, LayoutVariant>

const breakpointStyles: BreakpointStyles = {
  sm: { full: 'hidden sm:flex', compact: 'flex sm:hidden' },
  md: { full: 'hidden md:flex', compact: 'flex md:hidden' },
  lg: { full: 'hidden lg:flex', compact: 'flex lg:hidden' },
  xl: { full: 'hidden xl:flex', compact: 'flex xl:hidden' },
  '2xl': { full: 'hidden 2xl:flex', compact: 'flex 2xl:hidden' },
}

export function ListboxButton({
  text,
  leadingIcon,
  compactBelow,
  hasError,
}: ListboxButtonProps) {
  return (
    <HeadlessUIListboxButton
      className={clsx(
        'relative inline-flex w-full items-center justify-between gap-2 rounded-lg border bg-brand-800 p-3 text-brand-300 hover:border-current hover:text-brand-400 focus:brand-outline',
        hasError ? 'border-red-400' : 'border-brand-300',
      )}
    >
      <div
        className={clsx(
          'w-full items-center justify-start gap-2',
          compactBelow ? breakpointStyles[compactBelow].full : 'flex',
        )}
      >
        {leadingIcon && <Icon component={leadingIcon} />}
        <span className="block truncate pr-6">{text}</span>

        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
          <Icon component={CaretDown} size={16} weight="bold" />
        </div>
      </div>

      <div
        className={clsx(
          'items-center justify-center',
          compactBelow ? breakpointStyles[compactBelow].compact : 'hidden',
        )}
      >
        <Icon component={leadingIcon ?? CaretDown} />
      </div>
    </HeadlessUIListboxButton>
  )
}
