import Link from 'next/link'

import { clsx } from 'clsx'
import type { Route } from 'next'

import { getTouchTargetStyles } from '@/utils/getTouchTargetStyles'

type MainNavItemProps = {
  href: Route
  label: string
  isActive?: boolean
}

type MainNavItemStylesOptions = {
  isActive: boolean
  isPopover?: boolean
}

const { touchAreaPadding } = getTouchTargetStyles('mainNavItem')

export function MainNavItem({
  label,
  href,
  isActive = false,
}: MainNavItemProps) {
  return (
    <li>
      <Link href={href} className={getMainNavItemStyles({ isActive })}>
        {label}
      </Link>
    </li>
  )
}

export function getMainNavItemStyles({
  isActive,
  isPopover,
}: MainNavItemStylesOptions) {
  const baseStyles =
    'rounded-xl py-1.5 text-base focus:brand-outline hover:bg-brand-700'

  const extendedStyles = isPopover
    ? 'inline-flex items-center gap-2 pl-4 pr-3 ui-open:bg-brand-700 ui-open:text-brand-400'
    : clsx('inline-block', touchAreaPadding)

  return clsx(
    baseStyles,
    extendedStyles,
    isActive ? 'text-brand-400' : 'text-brand-300',
  )
}
