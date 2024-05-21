'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ArrowUpRight } from '@phosphor-icons/react'
import clsx from 'clsx'
import { Route } from 'next'

import { useNavigationItems } from '@/hooks/useNavigationItems'

import { Icon } from '@/components/Icon'
import { NavigationPopover } from '@/components/NavigationPopover'

import { PATHS } from '@/constants/paths'
import { desktopNavigationItems } from '@/data/components/navigationData'

type MainNavItemProps = {
  href: Route
  label: string
  isActive?: boolean
}

export type SubNavItemProps = {
  href: string | Route
  label: string
  description?: string
  linkType?: 'internal' | 'externalPrimary' | 'externalSecondary'
}

function SubNavItem({
  href,
  label,
  description,
  linkType = 'internal',
}: SubNavItemProps) {
  const external = linkType !== 'internal'

  const baseStyles =
    'group w-full rounded-lg focus:outline focus:outline-2 focus:outline-brand-100'
  const extendedStyles = {
    internal: 'inline-block bg-brand-800 p-4 hover:bg-brand-700',
    externalPrimary:
      'inline-block border border-brand-500 bg-brand-700 p-4 hover:border-brand-400 focus:border-transparent',
    externalSecondary:
      'inline-flex items-center justify-center gap-1 bg-brand-800 px-3 py-5 text-brand-300 hover:bg-brand-700',
  }

  const linkClasses = clsx(baseStyles, extendedStyles[linkType])
  const commonProps = {
    className: linkClasses,
    'aria-label': `${label} page (${external ? 'external link' : 'internal link'})`,
  }

  return external ? (
    <a href={href} {...commonProps} rel="noopener noreferrer">
      <div className="inline-flex items-center gap-1">
        <p className="font-bold">{label}</p>
        <span className="text-brand-400 group-hover:text-brand-100">
          <Icon component={ArrowUpRight} size={20} />
        </span>
      </div>
      {description && <p className="mt-4 text-brand-300">{description}</p>}
    </a>
  ) : (
    <Link href={href as Route} {...commonProps}>
      <p className="mb-1 font-bold">{label}</p>
      <p className="text-brand-300">{description}</p>
    </Link>
  )
}

const mainNavItem = {
  width: 'px-4',
  offsetWidth: '-mr-4',
}

function getMainNavItemStyles(isActive: boolean, isPopover = false) {
  const baseStyles =
    'rounded-xl py-1.5 text-base hover:bg-brand-700 focus:outline focus:outline-2 focus:outline-brand-100'

  const extendedStyles = isPopover
    ? 'inline-flex items-center gap-2 pl-4 pr-3 ui-open:bg-brand-700 ui-open:text-brand-400'
    : clsx('inline-block', mainNavItem.width)

  return clsx(
    baseStyles,
    extendedStyles,
    isActive ? 'text-brand-400' : 'text-brand-300',
  )
}

function MainNavItem({ label, href, isActive = false }: MainNavItemProps) {
  return (
    <li>
      <Link href={href} className={getMainNavItemStyles(isActive)}>
        {label}
      </Link>
    </li>
  )
}

const { getInvolvedItems, communityItems, learnMoreItem } =
  desktopNavigationItems

export function DesktopNavigation() {
  const pathname = usePathname()

  const {
    internalItems: getInvolvedInternalItems,
    externalItems: getInvolvedExternalItems,
    isActive: isGetInvolvedActive,
  } = useNavigationItems(getInvolvedItems)

  const { isActive: isCommunityActive, internalItems: communityInternalItems } =
    useNavigationItems(communityItems)

  return (
    <ul
      aria-label="Navigation items"
      className={clsx(
        'relative z-10 hidden lg:flex lg:items-center lg:gap-0.5',
        mainNavItem.offsetWidth,
      )}
    >
      <MainNavItem
        label={PATHS.ABOUT.label}
        href={PATHS.ABOUT.path}
        isActive={pathname === PATHS.ABOUT.path}
      />

      <NavigationPopover
        as="li"
        label="Get Involved"
        mainNavItemStyles={getMainNavItemStyles(isGetInvolvedActive, true)}
      >
        <div className="grid w-screen max-w-2xl grid-cols-2 gap-4">
          <div className="space-y-4">
            {getInvolvedInternalItems.map((item) => (
              <SubNavItem key={item.href} {...item} linkType="internal" />
            ))}
          </div>
          <div className="space-y-4">
            {getInvolvedExternalItems.map((item) => (
              <SubNavItem
                key={item.href}
                {...item}
                linkType="externalPrimary"
              />
            ))}
            <SubNavItem {...learnMoreItem} linkType="externalSecondary" />
          </div>
        </div>
      </NavigationPopover>

      <NavigationPopover
        as="li"
        label="Community"
        mainNavItemStyles={getMainNavItemStyles(isCommunityActive, true)}
      >
        <div className="w-80 space-y-4">
          {communityInternalItems.map((item) => (
            <SubNavItem key={item.label} {...item} linkType="internal" />
          ))}
        </div>
      </NavigationPopover>

      <MainNavItem
        label={PATHS.BLOG.label}
        href={PATHS.BLOG.path}
        isActive={pathname === PATHS.BLOG.path}
      />
    </ul>
  )
}
