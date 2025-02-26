'use client'

import { useState } from 'react'

import Link from 'next/link'

import { Social } from '@filecoin-foundation/ui/Social'
import { List, X } from '@phosphor-icons/react'

import { mobileNavigationItems } from '@/constants/navigation'
import { PATHS } from '@/constants/paths'

import { socialLinksWithIcons } from '@/utils/socialConfig'

import { IconButton } from '@/components/IconButton'
import { Logo } from '@/components/Logo'
import { SlideOver } from '@/components/SlideOver'

import { LinkItem } from './LinkItem'
import { NestedMenu } from './NestedMenu'

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
              className="shrink-0 focus:brand-outline"
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
              href={PATHS.ABOUT.path}
              setOpen={setOpen}
            />
            {Object.entries(mobileNavigationItems).map(([title, items]) => (
              <NestedMenu
                key={title}
                title={title}
                items={items}
                setOpen={setOpen}
              />
            ))}
          </ul>
          <Social socialLinksWithIcons={socialLinksWithIcons} />
        </div>
      </SlideOver>
    </div>
  )
}
