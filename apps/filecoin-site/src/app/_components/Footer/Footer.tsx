import { FooterDesktop } from './FooterDesktop'
import { FooterMobile } from './FooterMobile'

export function Footer() {
  return (
    <footer className="flex flex-col gap-16 bg-zinc-950 px-6 pt-20 pb-16 text-white md:px-16">
      <FooterDesktop />
      <FooterMobile />
    </footer>
  )
}
