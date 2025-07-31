'use client'

import { useState } from 'react'

import { ListIcon, XIcon } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import { IconButton } from '@filecoin-foundation/ui/IconButton'
import { SlideOver } from '@filecoin-foundation/ui/SlideOver'

import { backgroundVariants, type SectionProps } from '@/components/Section'

import { NAV_LINKS } from './constants'
import { HomeLogoIconLink } from './HomeLogoIconLink'
import { NavigationLink } from './NavigationLink'

type MobileBackgroundVariant = Extract<
  SectionProps['backgroundVariant'],
  'light' | 'dark'
>

export type MobileNavigationProps = {
  backgroundVariant: MobileBackgroundVariant
}

export function MobileNavigation({ backgroundVariant }: MobileNavigationProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <IconButton
        icon={ListIcon}
        label="Open mobile navigation"
        onClick={openPanel}
      />

      <SlideOver open={open} setOpen={setOpen}>
        <div
          className={clsx(
            'flex h-full flex-col gap-12 px-6 py-8',
            backgroundVariants[backgroundVariant],
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
          <ul aria-label="Navigation options" className="mobile-navigation">
            {NAV_LINKS.map(({ path, label }) => (
              <li key={path}>
                <NavigationLink
                  on="mobile"
                  href={path}
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
