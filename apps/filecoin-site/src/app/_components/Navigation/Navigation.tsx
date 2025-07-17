'use client'

import { LogoLink } from '@filecoin-foundation/ui/LogoLink'

import { useNavigationTheme } from '@/hooks/useNavigationTheme'

import { Container } from '@/components/Container'
import { LogoIcon } from '@/components/Logo/IconLogo'
import { Section } from '@/components/Section'

import { DesktopNavigation } from './DesktopNavigation'
import { MobileNavigation } from './MobileNavigation'

export function Navigation() {
  const isDarkTheme = useNavigationTheme()

  return (
    <Section as="header" backgroundVariant={isDarkTheme ? 'dark' : 'light'}>
      <Container>
        <nav className="my-8 flex items-center justify-between lg:justify-start lg:gap-24">
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
