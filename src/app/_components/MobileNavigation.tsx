'use client'

import { Fragment, useState, Dispatch, SetStateAction } from 'react'

import Link from 'next/link'

import { List, X } from '@phosphor-icons/react'
import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { Logo } from '@/components/Logo'
import { SlideOver } from '@/components/SlideOver'
import { Social } from '@/components/Social'
import { TextLink } from '@/components/TextLink'

import { PATHS } from '@/constants/paths'

const getInvolvedItems = [PATHS.EVENTS, PATHS.GRANTS]
const communityItems = [PATHS.ECOSYSTEM, PATHS.GOVERNANCE]

type MobileLinkProps = {
  label: string
  path: string
  nested?: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

function MobileLink({ label, path, nested, setOpen }: MobileLinkProps) {
  return (
    <li className={clsx(nested ? 'border-l border-brand-400' : '-ml-5')}>
      <TextLink
        href={path}
        className="inline-block px-5 py-2.5"
        onClick={() => setOpen(false)}
      >
        {label}
      </TextLink>
    </li>
  )
}

export function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <button
        className="-mr-4 flex size-12 items-center justify-center lg:hidden"
        aria-label="Open mobile navigation"
        onClick={() => setOpen(!open)}
      >
        <Icon component={List} color="brand-300" />
      </button>

      <SlideOver open={open} setOpen={setOpen}>
        <div className="flex items-center justify-between px-6 pb-12 pt-8 sm:pb-16 md:pb-24">
          <Link
            className="flex-shrink-0 outline-white focus:outline-2"
            href={PATHS.HOME.path}
            aria-label="Go to homepage"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </Link>

          <button
            className="-mr-4 flex size-12 items-center justify-center"
            aria-label="Close mobile navigation"
            onClick={() => setOpen(false)}
          >
            <Icon component={X} color="brand-300" />
          </button>
        </div>

        <ul
          className="px-6 pb-12 sm:pb-16 md:pb-24"
          aria-label="Navigation options"
        >
          <MobileLink
            label={PATHS.ABOUT.label}
            path={PATHS.ABOUT.path}
            setOpen={setOpen}
          />

          <li>
            <p className="my-2.5 text-brand-300">Get Involved</p>
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

          <li>
            <p className="my-2.5 text-brand-300">Community</p>
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

        <div className="px-4">
          <Social justify="left" />
        </div>
      </SlideOver>
    </Fragment>
  )
}
