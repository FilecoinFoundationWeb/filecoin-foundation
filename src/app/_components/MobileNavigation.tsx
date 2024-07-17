'use client'

import { useState, Dispatch, SetStateAction } from 'react'

import Link from 'next/link'

import { ArrowUpRight, List, X } from '@phosphor-icons/react'
import clsx from 'clsx'
import { Route } from 'next'

import { Icon as IconComponent, Icon, IconProps } from '@/components/Icon'
import { Logo } from '@/components/Logo'
import { SlideOver } from '@/components/SlideOver'
import { Social } from '@/components/Social'
import { linkBaseStyles } from '@/components/TextLink'

import { isExternalLink } from '@/utils/linkUtils'

import { mobileViewNavigationList } from '@/_utils/navigationItems'
import { PATHS } from '@/constants/paths'

type IconButtonProps = {
  icon: IconProps['component']
  label: string
  onClick: React.ComponentPropsWithoutRef<'button'>['onClick']
}

function IconButton({ icon: IconComponent, label, onClick }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className="grid size-12 place-items-center rounded-lg border border-brand-300 text-brand-300 focus:brand-outline"
      onClick={onClick}
    >
      <Icon size={20} component={IconComponent} />
    </button>
  )
}

type LinkItemProps = {
  label: string
  path: Route
  nested?: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

function LinkItem({ label, path, nested, setOpen }: LinkItemProps) {
  return (
    <li
      className={clsx(nested && 'ml-6 flex items-center gap-2 text-brand-300')}
    >
      <Link
        href={path}
        className={clsx(
          linkBaseStyles,
          "relative before:absolute before:inset-0 before:-m-3.5 before:content-['']",
        )}
        onClick={() => setOpen(false)}
      >
        {label}
      </Link>
      {isExternalLink(path) && (
        <IconComponent size={16} component={ArrowUpRight} />
      )}
    </li>
  )
}

type NestedMenuItemProps = {
  path: LinkItemProps['path']
  label: LinkItemProps['label']
}

type NestedMenuProps = {
  title: string
  items: NestedMenuItemProps[]
  setOpen: Dispatch<SetStateAction<boolean>>
}

function NestedMenu({ title, items, setOpen }: NestedMenuProps) {
  return (
    <li>
      <span className="mb-4 block text-brand-200">{title}</span>
      <ul className="items-center space-y-6 border-l ">
        {items.map((item) => (
          <>
            <LinkItem
              key={item.path}
              nested
              label={item.label}
              path={item.path}
              setOpen={setOpen}
            />
          </>
        ))}
      </ul>
    </li>
  )
}

export function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <IconButton
        icon={List}
        label="Open mobile navigation"
        onClick={() => setOpen(true)}
      />

      <SlideOver open={open} setOpen={setOpen}>
        <div className="flex flex-col gap-12 px-6 py-8">
          <div className="flex items-center justify-between">
            <Link
              className="flex-shrink-0 focus:brand-outline"
              href={PATHS.HOME.path}
              aria-label="Go to homepage"
              onClick={() => setOpen(false)}
            >
              <Logo />
            </Link>
            <IconButton
              icon={X}
              label="Close mobile navigation"
              onClick={() => setOpen(false)}
            />
          </div>
          <ul className="space-y-6" aria-label="Navigation options">
            <LinkItem
              label={PATHS.ABOUT.label}
              path={PATHS.ABOUT.path}
              setOpen={setOpen}
            />
            {Object.entries(mobileViewNavigationList).map(([title, items]) => (
              <NestedMenu
                key={title}
                title={title}
                items={items}
                setOpen={setOpen}
              />
            ))}
          </ul>
          <Social />
        </div>
      </SlideOver>
    </div>
  )
}
