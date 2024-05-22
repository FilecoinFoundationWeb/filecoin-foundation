'use client'

import { Fragment, useState, Dispatch, SetStateAction } from 'react'

import Link from 'next/link'

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

const linkTouchTarget = {
  class: 'inline-block px-5 py-2',
  offsetClass: '-ml-5',
}

type MobileLinkProps = {
  label: string
  path: Route
  nested?: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

function MobileLink({ label, path, nested, setOpen }: MobileLinkProps) {
  return (
    <li className={clsx(!nested && linkTouchTarget.offsetClass)}>
      <Link
        href={path}
        className={clsx(linkBaseStyles, linkTouchTarget.class)}
        onClick={() => setOpen(false)}
      >
        {label}
      </Link>
    </li>
  )
}

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
        <div className="flex items-center justify-between px-6 pb-12 pt-8 sm:pb-16">
          <Link
            className="flex-shrink-0 outline-white focus:outline-2"
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

        <ul className="px-6 pb-12 sm:pb-16" aria-label="Navigation options">
          <MobileLink
            label={PATHS.ABOUT.label}
            path={PATHS.ABOUT.path}
            setOpen={setOpen}
          />

          <li className="bottom-sideline">
            <p className="my-2 text-brand-200">Get Involved</p>
          </li>

          {getInvolvedItems.map((item) => (
            <MobileLink
              key={item.path}
              nested
              label={item.label}
              path={item.path}
              setOpen={setOpen}
            />
          ))}

          <li className="bottom-sideline">
            <p className="my-2 text-brand-200">Community</p>
          </li>
          {communityItems.map((item) => (
            <MobileLink
              key={item.path}
              nested
              label={item.label}
              path={item.path}
              setOpen={setOpen}
            />
          ))}

          <MobileLink
            label={PATHS.BLOG.label}
            path={PATHS.BLOG.path}
            setOpen={setOpen}
          />
        </ul>

        <div className="px-6">
          <Social />
        </div>
      </SlideOver>
    </Fragment>
  )
}
