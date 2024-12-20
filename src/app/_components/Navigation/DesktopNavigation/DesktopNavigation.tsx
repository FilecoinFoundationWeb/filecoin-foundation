'use client'

import { usePathname } from 'next/navigation'

import { desktopNavigationItems } from '@/constants/navigation'
import { PATHS } from '@/constants/paths'

import { useNavigationItems } from '@/hooks/useNavigationItems'

import { NavigationPopover } from '@/components/NavigationPopover'

import { getMainNavItemStyles, MainNavItem } from './MainNavItem'
import { SubNavItem } from './SubNavItem'

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
      className="relative z-10 hidden lg:flex lg:items-center lg:gap-0.5"
    >
      <MainNavItem
        label={PATHS.ABOUT.label}
        href={PATHS.ABOUT.path}
        isActive={pathname === PATHS.ABOUT.path}
      />

      <NavigationPopover
        as="li"
        label="Get Involved"
        mainNavItemStyles={getMainNavItemStyles({
          isActive: isGetInvolvedActive,
          isPopover: true,
        })}
      >
        <div className="grid w-screen max-w-2xl grid-cols-2 gap-4">
          <div className="space-y-4">
            {getInvolvedInternalItems.map((item) => (
              <SubNavItem key={item.href} {...item} linkType="internal" />
            ))}
            <SubNavItem {...careersItem} linkType="externalGhost" />
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
        mainNavItemStyles={getMainNavItemStyles({
          isActive: isCommunityActive,
          isPopover: true,
        })}
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
        mainNavItemStyles={getMainNavItemStyles({
          isActive: isResourcesActive,
          isPopover: true,
        })}
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
