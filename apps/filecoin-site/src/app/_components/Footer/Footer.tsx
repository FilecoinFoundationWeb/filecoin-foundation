import { DesktopFooter } from './DesktopFooter'
import { MobileFooter } from './MobileFooter'

export function Footer() {
  return (
    <footer className="flex flex-col gap-16 bg-zinc-950 px-6 pt-20 pb-16 text-white md:px-16">
      <DesktopFooter />
      <MobileFooter />
    </footer>
  )
}
