import { ListboxButton as HeadlessUIListboxButton } from '@headlessui/react'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'
import { clsx } from 'clsx'
import type resolveConfig from 'tailwindcss/resolveConfig'

import { Icon, type IconProps } from '@/components/Icon'

type TailwindConfig = ReturnType<typeof resolveConfig>
type Breakpoint = keyof TailwindConfig['theme']['screens']

type ListboxButtonProps = {
  text: string
  prefixIcon?: IconProps['component']
  compactBelow?: Breakpoint
}

type ViewTransition = {
  hide: string
  show: string
}

type BreakpointStyles = Record<Breakpoint, ViewTransition>

const breakpointStyles: BreakpointStyles = {
  sm: { hide: 'sm:hidden', show: 'sm:flex' },
  md: { hide: 'md:hidden', show: 'md:flex' },
  lg: { hide: 'lg:hidden', show: 'lg:flex' },
  xl: { hide: 'xl:hidden', show: 'xl:flex' },
  '2xl': { hide: '2xl:hidden', show: '2xl:flex' },
} as const

export function ListboxButton({
  text,
  prefixIcon,
  compactBelow,
}: ListboxButtonProps) {
  return (
    <HeadlessUIListboxButton className="relative inline-flex w-full items-center justify-between gap-2 rounded-lg border border-brand-300 bg-brand-800 p-3 text-brand-300 focus:brand-outline hover:border-current hover:text-brand-400">
      <div
        className={clsx(
          'flex w-full items-center justify-start gap-2',
          compactBelow && breakpointStyles[compactBelow].hide,
        )}
      >
        {prefixIcon && <Icon component={prefixIcon} />}
        <span className="block truncate pr-6">{text}</span>

        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
          <Icon component={CaretDown} size={16} weight="bold" />
        </div>
      </div>

      <div
        className={clsx(
          'hidden',
          compactBelow && breakpointStyles[compactBelow].show,
        )}
      >
        <Icon component={prefixIcon ?? CaretDown} />
      </div>
    </HeadlessUIListboxButton>
  )
}
