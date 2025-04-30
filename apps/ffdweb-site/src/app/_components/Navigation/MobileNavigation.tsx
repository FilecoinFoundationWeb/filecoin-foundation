'use client'

import { useState } from 'react'

import { List, X } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import { IconButton } from '@filecoin-foundation/ui/IconButton'
import { SlideOver } from '@filecoin-foundation/ui/SlideOver'
import { Social } from '@filecoin-foundation/ui/Social'

import { socialLinksWithIcons } from '@/utils/socialConfig'

import { LogoLink } from '@/components/LogoLink'

import { NAV_LINKS, TOUCH_TARGET_NAV_LINK } from './constants'
import { NavigationLink } from './NavigationLink'

export function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <IconButton
        icon={List}
        label="Open mobile navigation"
        onClick={openPanel}
      />

      <SlideOver open={open} setOpen={setOpen}>
        <div className="flex flex-col gap-12 p-8">
          <div className="flex items-center justify-between">
            <LogoLink height={50} />
            <IconButton
              icon={X}
              label="Close mobile navigation"
              onClick={closePanel}
            />
          </div>
          <ul
            aria-label="Navigation options"
            className={clsx(
              TOUCH_TARGET_NAV_LINK.touchAreaOffset,
              'flex flex-col gap-2',
            )}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavigationLink
                  href={link.path}
                  label={link.label}
                  onClick={closePanel}
                />
              </li>
            ))}
          </ul>
          <Social linksWithIcons={socialLinksWithIcons} />
        </div>
      </SlideOver>
    </div>
  )

  function openPanel() {
    setOpen(true)
  }

  function closePanel() {
    setOpen(false)
  }
}
