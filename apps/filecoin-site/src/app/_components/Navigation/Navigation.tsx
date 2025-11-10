import { Container } from '@filecoin-foundation/ui-filecoin/Container'
import {
  Section,
  type SectionProps,
} from '@filecoin-foundation/ui-filecoin/Section/Section'

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
        <nav className="flex items-center justify-between py-8 lg:gap-24 xl:justify-start">
          <HomeLogoIconLink />
          <MobileNavigation />
          <DesktopNavigation />
        </nav>
      </Container>
    </Section>
  )
}
