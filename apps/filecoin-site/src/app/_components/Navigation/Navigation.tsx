'use client'

import { usePathname } from 'next/navigation'

import { LogoLink } from '@filecoin-foundation/ui/LogoLink'

import { PATHS, type StaticPath } from '@/constants/paths'

import { Container } from '@/components/Container'
import { LogoIcon } from '@/components/Logo/IconLogo'
import { Section } from '@/components/Section'

import { DesktopNavigation } from './DesktopNavigation'
import { MobileNavigation } from './MobileNavigation'

const DARK_THEME_ROUTES = [
  PATHS.BUILD_ON_FILECOIN.path,
  PATHS.STORE_DATA.path,
  PATHS.LEARN.path,
  PATHS.OFFER_STORAGE.path,
]

export function Navigation() {
  const pathname = usePathname()
  const isDarkTheme = DARK_THEME_ROUTES.includes(pathname as StaticPath)

  return (
    <Section
      as="header"
      backgroundVariant={isDarkTheme ? 'dark' : 'transparent'}
    >
      <Container>
        <nav className="my-9 flex items-center justify-between lg:justify-start lg:gap-24">
          <div className="shrink-0">
            <LogoLink logo={LogoIcon} />
          </div>
          <MobileNavigation />
          <DesktopNavigation />
        </nav>
      </Container>
    </Section>
  )
}
