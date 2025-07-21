'use client'

import { useState } from 'react'

import { ListIcon, XIcon } from '@phosphor-icons/react'

import { IconButton } from '@filecoin-foundation/ui/IconButton'
import { LogoLink } from '@filecoin-foundation/ui/LogoLink'
import { SlideOver } from '@filecoin-foundation/ui/SlideOver'

import { IconLogo } from '@/components/Navigation/IconLogo'

import { NAV_LINKS } from './constants'
import { NavigationLink } from './NavigationLink'

export function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <IconButton
        icon={ListIcon}
        label="Open mobile navigation"
        onClick={openPanel}
      />

      <SlideOver open={open} setOpen={setOpen}>
        <div className="flex flex-col gap-12 px-6 py-8">
          <div className="flex items-center justify-between">
            <LogoLink logo={IconLogo} />
            <IconButton
              icon={XIcon}
              label="Close mobile navigation"
              onClick={closePanel}
            />
          </div>
          <ul aria-label="Navigation options" className="flex flex-col gap-2">
            {NAV_LINKS.map(({ path, label }) => (
              <li key={path}>
                <NavigationLink
                  href={path}
                  label={label}
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
