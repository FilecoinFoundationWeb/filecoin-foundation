import { LogoLink, type LogoLinkProps } from '@filecoin-foundation/ui/LogoLink'

import IconLogo from '@/assets/logos/filecoin-logo-icon.svg'

import { Link } from '@/i18n/navigation'

type HomeLogoLinkProps = Pick<LogoLinkProps, 'onNavigate'>

export function HomeLogoIconLink(props: HomeLogoLinkProps) {
  return (
    <LogoLink logo={IconLogo} height={40} LinkComponent={Link} {...props} />
  )
}
