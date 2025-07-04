import { Container } from '@/components/Container'
import { Section } from '@/components/Section'

import { DesktopFooter } from './DesktopFooter'
import { MobileFooter } from './MobileFooter'

export function Footer() {
  return (
    <Section as="footer" backgroundVariant="dark">
      <Container>
        <DesktopFooter />
        <MobileFooter />
      </Container>
    </Section>
  )
}
