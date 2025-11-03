'use client'

import { useState } from 'react'

import { ListIcon, XIcon } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import { IconButton } from '@filecoin-foundation/ui/IconButton'
import { SlideOver } from '@filecoin-foundation/ui/SlideOver'
import { variantMapping } from '@filecoin-foundation/ui-filecoin/Navigation/constants'
import {
  useBackgroundVariant,
  backgroundVariants,
} from '@filecoin-foundation/ui-filecoin/Section'

import { mobileNavigationItems } from './constants/navigation'
import { HomeLogoIconLink } from './HomeLogoIconLink'
import { NavigationMainLink } from './NavigationMainLink'

export function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const backgroundVariant = useBackgroundVariant()
  const mobileBackgroundVariant = variantMapping[backgroundVariant]

  return (
    <div className="xl:hidden">
      <IconButton
        icon={ListIcon}
        label="Open mobile navigation"
        onClick={openPanel}
      />

      <SlideOver open={open} setOpen={setOpen}>
        <div
          className={clsx(
            'flex h-full flex-col gap-12 px-6 py-8',
            backgroundVariants[mobileBackgroundVariant],
          )}
        >
          <div className="flex items-center justify-between">
            <HomeLogoIconLink onNavigate={closePanel} />
            <IconButton
              icon={XIcon}
              label="Close mobile navigation"
              onClick={closePanel}
            />
          </div>
          <ul
            aria-label="Navigation options"
            className="flex flex-col divide-y divide-[var(--color-border-base)]"
          >
            {mobileNavigationItems.map(({ href, label }) => (
              <li key={href}>
                <NavigationMainLink
                  on="mobile"
                  href={href}
                  label={label}
                  onNavigate={closePanel}
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
