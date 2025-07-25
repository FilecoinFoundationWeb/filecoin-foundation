import { Container } from '@/components/Container'
import { Section, type SectionProps } from '@/components/Section'

import { DesktopNavigation } from './DesktopNavigation'
import { HomeLogoIconLink } from './HomeLogoIconLink'
import { MobileNavigation } from './MobileNavigation'

type NavigationProps = {
  backgroundVariant: SectionProps['backgroundVariant']
}

export function Navigation({ backgroundVariant }: NavigationProps) {
  return (
    <Section as="header" backgroundVariant={backgroundVariant}>
      <Container>
        <nav className="flex items-center justify-between py-8 lg:justify-start lg:gap-24">
          <HomeLogoIconLink />
          <MobileNavigation />
          <DesktopNavigation />
        </nav>
      </Container>
    </Section>
  )
}
