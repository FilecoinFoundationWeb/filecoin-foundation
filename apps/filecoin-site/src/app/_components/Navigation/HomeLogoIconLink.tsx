'use client'

import {
  HomeLogoLink,
  type HomeLogoLinkProps,
} from '@filecoin-foundation/ui-filecoin/HomeLogoLink'

import IconLogo from '@/assets/logos/filecoin-logo-icon.svg'

export function HomeLogoIconLink(props: HomeLogoLinkProps) {
  return <HomeLogoLink logo={IconLogo} height={40} {...props} />
}
