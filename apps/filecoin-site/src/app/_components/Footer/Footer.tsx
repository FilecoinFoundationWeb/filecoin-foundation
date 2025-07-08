import { Section } from '@/components/Section'

import { DesktopFooter } from './DesktopFooter'
import { MobileFooter } from './MobileFooter'

export function Footer() {
  return (
    <Section as="footer" backgroundVariant="dark">
      <DesktopFooter />
      <MobileFooter />
    </Section>
  )
}
