import { Link } from '@/i18n/navigation'

import {
  HomeLogoLink,
  type HomeLogoLinkProps,
} from '@filecoin-foundation/ui-filecoin/HomeLogoLink'

import IconLogo from '@/assets/logos/filecoin-logo-icon.svg'

type HomeLogoIconLinkProps = Pick<HomeLogoLinkProps, 'onNavigate'>

export function HomeLogoIconLink(props: HomeLogoIconLinkProps) {
  return (
    <HomeLogoLink
      logo={IconLogo}
      height={40}
      // @ts-expect-error: Types of property 'prefetch' are incompatible between next-intl Link and Next.js Link
      LinkComponent={Link}
      {...props}
    />
  )
}
