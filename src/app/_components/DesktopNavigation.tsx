'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ArrowUpRight } from '@phosphor-icons/react'
import clsx from 'clsx'
import { Route } from 'next'

import { useActiveItems } from '@/hooks/useNavigationStatus'

import { Icon } from '@/components/Icon'
import { NavigationPopover } from '@/components/NavigationPopover'

import { PATHS } from '@/constants/paths'
import { desktopNavigationItems } from '@/data/components/navigationData'

export type SubLinkProps = {
  href: string | Route
  label: string
  description: string
}

type InternalLinkProps = {
  href: Route
  label: string
  isActive?: boolean
}

function InternalSubLink({ label, description, href }: SubLinkProps) {
  return (
    <Link
      href={href as Route}
      className="inline-block w-full rounded-lg bg-brand-800 p-4 hover:bg-brand-700 focus:outline focus:outline-2 focus:outline-brand-100"
      aria-label={`${label} page (internal link)`}
    >
      <p className="mb-1 font-bold">{label}</p>
      <p className="text-brand-300">{description}</p>
    </Link>
  )
}

function ExternalSubLink({ label, description, href }: SubLinkProps) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className="group inline-block w-full rounded-lg border border-brand-500 bg-brand-700 p-4 hover:border-brand-400 focus:border-transparent focus:outline focus:outline-2 focus:outline-brand-100"
    >
      <div className="mb-4 inline-flex items-center gap-1">
        <p className="font-bold">{label}</p>
        <span className="text-brand-400 group-hover:text-brand-100">
          <Icon component={ArrowUpRight} size={20} />
        </span>
      </div>
      <p className="text-brand-300">{description}</p>
    </a>
  )
}

function InternalLink({ label, href, isActive }: InternalLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'inline-block rounded-xl px-4 py-1.5 hover:bg-brand-700 focus:outline focus:outline-2 focus:outline-brand-100',
          isActive ? 'text-brand-400' : 'text-brand-300',
        )}
      >
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
  } = useActiveItems(getInvolvedItems)
  const { isActive: isCommunityActive } = useActiveItems(communityItems)

  return (
    <ul
      className="relative z-10 hidden lg:flex lg:items-center lg:gap-0.5"
      aria-label="Navigation items"
    >
      <InternalLink
        label={PATHS.ABOUT.label}
        href={PATHS.ABOUT.path}
        isActive={pathname === PATHS.ABOUT.path}
      />

      <NavigationPopover
        as="li"
        label="Get Involved"
        isActive={isGetInvolvedActive}
      >
        <div className="grid w-screen max-w-2xl grid-cols-2 gap-4">
          <div className="space-y-4">
            {getInvolvedInternalItems.map((item) => (
              <InternalSubLink key={item.href} {...item} />
            ))}
          </div>
          <div className="space-y-4">
            {getInvolvedExternalItems.map((item) => (
              <ExternalSubLink key={item.href} {...item} />
            ))}
            <a
              href={learnMoreItem.href}
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-1 rounded-lg bg-brand-800 px-3 py-5 text-brand-300 hover:bg-brand-700 focus:outline focus:outline-2 focus:outline-brand-100"
              aria-label={`${learnMoreItem.label} (opens a new window)`}
            >
              <p className="font-bold">{learnMoreItem.label}</p>
              <span className="text-brand-400 group-hover:text-brand-100">
                <Icon component={ArrowUpRight} size={20} />
              </span>
            </a>
          </div>
        </div>
      </NavigationPopover>

      <NavigationPopover as="li" label="Community" isActive={isCommunityActive}>
        <div className="w-80 space-y-4">
          {communityItems.map((item) => (
            <InternalSubLink key={item.label} {...item} />
          ))}
        </div>
      </NavigationPopover>

      <InternalLink
        label={PATHS.BLOG.label}
        href={PATHS.BLOG.path}
        isActive={pathname === PATHS.BLOG.path}
      />
    </ul>
  )
}
