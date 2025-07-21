import { LogoLink } from '@filecoin-foundation/ui/LogoLink'

import Logo from '@/assets/logos/filecoin-logo-full.svg'
import IconLogo from '@/assets/logos/filecoin-logo-icon.svg'

export function FooterLogo() {
  return (
    <>
      <div className="block lg:hidden">
        <LogoLink logo={IconLogo} height={40} color="text-zinc-50" />
      </div>
      <div className="hidden lg:block">
        <LogoLink logo={Logo} height={32} color="text-zinc-50" />
      </div>
    </>
  )
}
