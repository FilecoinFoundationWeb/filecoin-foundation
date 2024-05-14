'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ArrowUpRight } from '@phosphor-icons/react'
import clsx from 'clsx'
import { Route } from 'next'

import { Icon } from '@/components/Icon'
import { NavigationPopover } from '@/components/NavigationPopover'

import { isInternalLink, isExternalLink } from '@/utils/linkUtils'

import { PATHS } from '@/constants/paths'

const getInvolvedItems = [
  {
    label: PATHS.EVENTS.label,
    href: PATHS.EVENTS.path,
    description: 'Overview of upcoming and past events',
  },
  {
    label: PATHS.GRANTS.label,
    href: PATHS.GRANTS.path,
    description:
      'Information on funding opportunities supporting projects that contribute to the growth of the Filecoin Network',
  },
  {
    label: 'Become a Storage Provider',
    href: 'https://destor.com/destor-network/overview',
    description: 'Dive right in and become an essential part of the ecosystem',
  },
  {
    label: 'Contribute to the Filecoin Project',
    href: 'https://docs.filecoin.io/basics/project-and-community/ways-to-contribute',
    description:
      'Shape the future of Filecoin by contributing to its code, research, or docs.',
  },
]

const communityItems = [
  {
    label: PATHS.ECOSYSTEM.label,
    href: PATHS.ECOSYSTEM.path,
    description: 'Learn about various ecosystem projects or submit your own',
  },
  {
    label: PATHS.GOVERNANCE.label,
    href: PATHS.GOVERNANCE.path,
    description:
      'Learn about Filecoin Improvement Proposals and other governance mechanisms',
  },
]

const learnMoreItem = {
  label: 'Learn more about Filecoin',
  href: 'https://docs.filecoin.io/',
}

type SubLinkProps = {
  label: string | Route
  description: string
  href: string
}

function InternalSubLink({ label, description, href }: SubLinkProps) {
  return (
    <Link
      href={href as Route}
      className="inline-block w-full rounded-lg bg-brand-800 p-4 hover:bg-brand-700 focus:outline focus:outline-2 focus:outline-brand-100"
      aria-label={`${label} page (internal link)`}
    >
      <p className="pb-1 font-bold">{label}</p>
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
      <div className="mb-4 flex gap-1">
        <p className="font-bold">{label}</p>
        <span className="mt-0.5 text-brand-400 group-hover:text-brand-100">
          <Icon component={ArrowUpRight} size={20} />
        </span>
      </div>

      <p className="text-brand-300">{description}</p>
    </a>
  )
}

type LinkProps = {
  label: string
  href: Route
  isActive?: boolean
}

function InternalLink({ label, href, isActive }: LinkProps) {
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

const getInvolvedInternalItems = getInvolvedItems.filter((item) =>
  isInternalLink(item.href),
)

const getInvolvedExternalItems = getInvolvedItems.filter((item) =>
  isExternalLink(item.href),
)

export function DesktopNavigation() {
  const pathname = usePathname()

  const isGetInvolvedActive = getInvolvedInternalItems
    .map((item) => item.href)
    .includes(pathname)

  const isCommunityActive = communityItems
    .map((item) => item.href as string)
    .includes(pathname)

  return (
    <ul
      className="relative z-10 hidden items-center gap-0.5 lg:flex"
      aria-label="Navigation items"
    >
      <InternalLink
        label={PATHS.ABOUT.label}
        href={PATHS.ABOUT.path}
        isActive={pathname.startsWith(PATHS.ABOUT.path)}
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
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full justify-center gap-1 rounded-lg bg-brand-800 px-3 py-5 hover:bg-brand-700 focus:outline focus:outline-2 focus:outline-brand-100"
              aria-label={`${learnMoreItem.label} (opens a new window)`}
            >
              <span className="font-bold text-brand-300">
                {learnMoreItem.label}
              </span>
              <span className="mt-0.5 text-brand-400 group-hover:text-brand-100">
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
        isActive={pathname.startsWith(PATHS.BLOG.path)}
      />
    </ul>
  )
}
