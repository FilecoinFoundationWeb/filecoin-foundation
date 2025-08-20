'use client'

import { usePathname } from 'next/navigation'

import { clsx } from 'clsx'

import { NavigationMenu } from '@filecoin-foundation/ui/NavigationMenu'

import { desktopNavigationItems } from '@/constants/navigation'
import { PATHS } from '@/constants/paths'

import { useNavigationItems } from '@/hooks/useNavigationItems'

import {
  getMainNavItemStyles,
  MainNavItem,
  TOUCH_TARGET_MAIN_NAV_ITEM,
} from './MainNavItem'
import { NavigationMenuLink } from './NavigationMenuLink'

const {
  careersItem,
  communityItems,
  getInvolvedItems,
  learnMoreItem,
  resourcesItems,
} = desktopNavigationItems

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
        TOUCH_TARGET_MAIN_NAV_ITEM.touchAreaOffset,
      )}
    >
      <MainNavItem
        label={PATHS.ABOUT.label}
        href={PATHS.ABOUT.path}
        isActive={pathname === PATHS.ABOUT.path}
      />

      <NavigationMenu
        as="li"
        label="Get Involved"
        labelClassName={getMainNavItemStyles({
          isActive: isGetInvolvedActive,
          isPopover: true,
        })}
      >
        <div className="grid max-w-2xl grid-cols-2 gap-4">
          <div className="space-y-4">
            {getInvolvedInternalItems.map((item) => (
              <NavigationMenuLink
                key={item.href}
                variant="internal"
                {...item}
              />
            ))}
            <NavigationMenuLink variant="externalGhost" {...careersItem} />
          </div>
          <div className="space-y-4">
            {getInvolvedExternalItems.map((item) => (
              <NavigationMenuLink
                key={item.href}
                {...item}
                variant="externalPrimary"
              />
            ))}
            <NavigationMenuLink
              {...learnMoreItem}
              variant="externalSecondary"
            />
          </div>
        </div>
      </NavigationMenu>

      <NavigationMenu
        as="li"
        label="Community"
        labelClassName={getMainNavItemStyles({
          isActive: isCommunityActive,
          isPopover: true,
        })}
      >
        <div className="w-80 space-y-4">
          {communityInternalItems.map((item) => (
            <NavigationMenuLink key={item.label} variant="internal" {...item} />
          ))}
        </div>
      </NavigationMenu>

      <NavigationMenu
        as="li"
        label="Resources"
        labelClassName={getMainNavItemStyles({
          isActive: isResourcesActive,
          isPopover: true,
        })}
      >
        <div className="w-80 space-y-4">
          {resourcesInternalItems.map((item) => (
            <NavigationMenuLink key={item.label} variant="internal" {...item} />
          ))}
        </div>
      </NavigationMenu>
    </ul>
  )
}
