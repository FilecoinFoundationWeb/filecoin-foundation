import { LogoLink as SharedLogoLink } from '@filecoin-foundation/ui/LogoLink'

import { Logo } from '@/components/Logo'

type LogoLinkProps = {
  height?: number
}

export function LogoLink({ height }: LogoLinkProps) {
  return <SharedLogoLink logo={() => <Logo height={height} />} />
}
