import { Container } from '@/components/Container'

import { DesktopFooter } from './DesktopFooter'
import { MobileFooter } from './MobileFooter'

export function Footer() {
  return (
    <Container bg="dark">
      <footer className="flex flex-col">
        <DesktopFooter />
        <MobileFooter />
      </footer>
    </Container>
  )
}
