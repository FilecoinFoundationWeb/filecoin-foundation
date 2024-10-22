'use client'

import { usePathname } from 'next/navigation'

import { clsx } from 'clsx'

import { PATHS } from '@/constants/paths'

import { desktopNavigationItems } from '@/data/navigationData'

import { useNavigationItems } from '@/hooks/useNavigationItems'

import { NavigationPopover } from '@/components/NavigationPopover'

import { TOUCH_TARGET_MAIN_NAV_ITEM, MainNavItem } from './MainNavItem'
import { SubNavItem } from './SubNavItem'

const { getInvolvedItems, communityItems, resourcesItems, learnMoreItem } =
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

  const { isActive: isResourcesActive, internalItems: resourcesInternalItems } =
    useNavigationItems(resourcesItems)

  return (
    <ul
      aria-label="Navigation items"
      className={clsx(
        'relative z-10 hidden lg:flex lg:items-center lg:gap-0.5',
        TOUCH_TARGET_MAIN_NAV_ITEM.offsetWidth,
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
            <SubNavItem {...learnMoreItem} linkType="externalSecondary" />
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

      <NavigationPopover
        as="li"
        label="Resources"
        mainNavItemStyles={getMainNavItemStyles(isResourcesActive, true)}
      >
        <div className="w-80 space-y-4">
          {resourcesInternalItems.map((item) => (
            <SubNavItem key={item.label} {...item} linkType="internal" />
          ))}
        </div>
      </NavigationPopover>
    </ul>
  )
}

function getMainNavItemStyles(isActive: boolean, isPopover = false) {
  const baseStyles =
    'focus:brand-outline rounded-xl py-1.5 text-base hover:bg-brand-700'

  const extendedStyles = isPopover
    ? 'inline-flex items-center gap-2 pl-4 pr-3 ui-open:bg-brand-700 ui-open:text-brand-400'
    : clsx('inline-block', TOUCH_TARGET_MAIN_NAV_ITEM.width)

  return clsx(
    baseStyles,
    extendedStyles,
    isActive ? 'text-brand-400' : 'text-brand-300',
  )
}
