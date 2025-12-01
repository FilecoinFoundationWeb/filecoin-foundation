'use client'

import { useState, type ComponentType } from 'react'

import { ListIcon, XIcon } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import { IconButton } from '../IconButton'
import { useBackgroundVariant, backgroundVariants } from '../Section/Section'
import { SlideOver } from '../SlideOver'

import { NavigationMainLink } from './NavigationMainLink'
import type { NavItem } from './types'

type HomeLogoIconLinkProps = {
  onNavigate?: () => void
}

export type MobileNavigationProps = {
  items: Array<NavItem>
  HomeLogoIconLinkComponent: ComponentType<HomeLogoIconLinkProps>
}

export function MobileNavigation({
  items,
  HomeLogoIconLinkComponent,
}: MobileNavigationProps) {
  const [open, setOpen] = useState(false)
  const { binaryVariant } = useBackgroundVariant()

  return (
    <div>
      <IconButton
        icon={ListIcon}
        label="Open mobile navigation"
        onClick={openPanel}
      />

      <SlideOver open={open} setOpen={setOpen}>
        <div
          className={clsx(
            'flex h-full flex-col gap-12 px-6 py-8',
            backgroundVariants[binaryVariant],
          )}
        >
          <div className="flex items-center justify-between">
            <HomeLogoIconLinkComponent onNavigate={closePanel} />
            <IconButton
              icon={XIcon}
              label="Close mobile navigation"
              onClick={closePanel}
            />
          </div>
          <ul
            aria-label="Navigation options"
            className="flex flex-col divide-y divide-(--color-border-base)"
          >
            {items.map(({ href, label }) => (
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
