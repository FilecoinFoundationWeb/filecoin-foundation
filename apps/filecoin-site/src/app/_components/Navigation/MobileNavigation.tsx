'use client'

import { useState } from 'react'

import { ListIcon, XIcon } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import { IconButton } from '@filecoin-foundation/ui/IconButton'
import { LogoLink } from '@filecoin-foundation/ui/LogoLink'
import { SlideOver } from '@filecoin-foundation/ui/SlideOver'

import { useNavigationTheme } from '@/hooks/useNavigationTheme'

import { LogoIcon } from '@/components/Logo/IconLogo'

import { NAV_LINKS } from './constants'
import { NavigationLink } from './NavigationLink'

export function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const isDarkTheme = useNavigationTheme()

  return (
    <div className="lg:hidden">
      <div className={clsx(isDarkTheme ? 'text-white' : 'text-zinc-600')}>
        <IconButton
          icon={ListIcon}
          label="Open mobile navigation"
          onClick={openPanel}
        />
      </div>

      <SlideOver open={open} setOpen={setOpen}>
        <div className="flex flex-col gap-12 px-6 py-8">
          <div className="flex items-center justify-between">
            <LogoLink logo={LogoIcon} />
            <IconButton
              icon={XIcon}
              label="Close mobile navigation"
              onClick={closePanel}
            />
          </div>
          <ul aria-label="Navigation options" className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="text-zinc-600">
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
