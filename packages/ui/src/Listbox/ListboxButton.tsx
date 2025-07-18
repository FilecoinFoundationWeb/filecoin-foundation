import { ListboxButton as HeadlessUIListboxButton } from '@headlessui/react'
import { CaretDownIcon } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'

import { Icon, type IconProps } from '@filecoin-foundation/ui/Icon'
import { type BreakpointValue } from '@filecoin-foundation/utils/types/tailwindTypes'

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
      aria-invalid={hasError}
      className={clsx(
        'listbox-button focus:brand-outline relative inline-flex w-full items-center justify-between gap-2 p-3',
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
          <Icon component={CaretDownIcon} size={16} weight="bold" />
        </div>
      </div>

      <div
        className={clsx(
          'items-center justify-center',
          compactBelow ? breakpointStyles[compactBelow].compact : 'hidden',
        )}
      >
        <Icon component={leadingIcon ?? CaretDownIcon} />
      </div>
    </HeadlessUIListboxButton>
  )
}
