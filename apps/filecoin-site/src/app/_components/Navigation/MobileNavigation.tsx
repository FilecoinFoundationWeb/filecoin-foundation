'use client'

import { useState } from 'react'

import { List, X } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import { IconButton } from '@filecoin-foundation/ui/IconButton'
import { LogoLink } from '@filecoin-foundation/ui/LogoLink'
import { SlideOver } from '@filecoin-foundation/ui/SlideOver'

import { LogoIcon } from '../LogoIcon'

import { NAV_LINKS } from './constants'
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
            <LogoLink logo={LogoIcon} />
            <IconButton
              icon={X}
              label="Close mobile navigation"
              onClick={closePanel}
            />
          </div>
          <ul
            aria-label="Navigation options"
            className={clsx('flex flex-col gap-2')}
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
