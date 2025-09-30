import IconLogo from '@/assets/logos/filecoin-logo-icon.svg'

import { LogoLink, type LogoLinkProps } from '@/components/LogoLink'


type HomeLogoLinkProps = Pick<LogoLinkProps, 'onNavigate'>

export function HomeLogoIconLink(props: HomeLogoLinkProps) {
  return <LogoLink logo={IconLogo} height={40} {...props} />
}
