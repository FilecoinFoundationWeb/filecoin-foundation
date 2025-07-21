'use client'

import { LogoLink } from '@filecoin-foundation/ui/LogoLink'

import { useNavigationTheme } from '@/hooks/useNavigationTheme'

import { Container } from '@/components/Container'
import { IconLogo } from '@/components/Logo/IconLogo'
import { Section } from '@/components/Section'

import { DesktopNavigation } from './DesktopNavigation'
import { MobileNavigation } from './MobileNavigation'

export function Navigation() {
  const isDarkTheme = useNavigationTheme()

  return (
    <Section as="header" backgroundVariant={isDarkTheme ? 'dark' : 'light'}>
      <Container>
        <nav className="my-8 flex items-center justify-between lg:justify-start lg:gap-24">
          <LogoLink logo={IconLogo} />
          <MobileNavigation />
          <DesktopNavigation />
        </nav>
      </Container>
    </Section>
  )
}
