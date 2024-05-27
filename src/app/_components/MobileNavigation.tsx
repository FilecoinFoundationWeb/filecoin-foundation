'use client'

import { Fragment, useState, Dispatch, SetStateAction } from 'react'

import NextLink from 'next/link'

import { List, X } from '@phosphor-icons/react'
import clsx from 'clsx'
import { Route } from 'next'

import { Icon, IconProps } from '@/components/Icon'
import { Logo } from '@/components/Logo'
import { SlideOver } from '@/components/SlideOver'
import { Social } from '@/components/Social'
import { linkBaseStyles } from '@/components/TextLink'

import { PATHS } from '@/constants/paths'

const getInvolvedItems = [PATHS.EVENTS, PATHS.GRANTS]
const communityItems = [PATHS.ECOSYSTEM, PATHS.GOVERNANCE]

type IconButtonProps = {
  icon: IconProps['component']
  label: string
  onClick: React.ComponentPropsWithoutRef<'button'>['onClick']
}

function IconButton({ icon: IconComponent, label, onClick }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={clsx(
        'flex size-12 items-center justify-center rounded-lg border border-brand-300 focus:outline-2 focus:outline-brand-100 lg:hidden',
      )}
      onClick={onClick}
    >
      <Icon component={IconComponent} color="brand-300" />
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
    <li>
      <NextLink
        href={path}
        className={clsx(linkBaseStyles, nested && 'ml-6')}
        onClick={() => setOpen(false)}
      >
        {label}
      </NextLink>
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
    <li className="text-brand-200">
      <span className="mb-4 block">{title}</span>
      <ul className="space-y-6 border-l">
        {items.map((item) => (
          <LinkItem
            key={item.path}
            nested
            label={item.label}
            path={item.path}
            setOpen={setOpen}
          />
        ))}
      </ul>
    </li>
  )
}

export function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <IconButton
        icon={List}
        label="Open mobile navigation"
        onClick={() => setOpen(true)}
      />

      <SlideOver open={open} setOpen={setOpen}>
        <div className="flex flex-col gap-12 px-6 py-8">
          <div className="flex items-center justify-between">
            <NextLink
              className="flex-shrink-0 outline-white focus:outline-2"
              href={PATHS.HOME.path}
              aria-label="Go to homepage"
              onClick={() => setOpen(false)}
            >
              <Logo />
            </NextLink>

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

            <NestedMenu
              title="Get Involved"
              items={getInvolvedItems}
              setOpen={setOpen}
            />
            <NestedMenu
              title="Community"
              items={communityItems}
              setOpen={setOpen}
            />

            <LinkItem
              label={PATHS.BLOG.label}
              path={PATHS.BLOG.path}
              setOpen={setOpen}
            />
          </ul>

          <Social />
        </div>
      </SlideOver>
    </Fragment>
  )
}
