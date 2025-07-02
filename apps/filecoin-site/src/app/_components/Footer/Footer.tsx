import { DesktopFooter } from './DesktopFooter'
import { MobileFooter } from './MobileFooter'

export const CONTAINER_SPACING = 'px-6 md:px-16'

export function Footer() {
  return (
    <footer className="flex flex-col bg-zinc-950">
      <DesktopFooter />
      <MobileFooter />
    </footer>
  )
}
