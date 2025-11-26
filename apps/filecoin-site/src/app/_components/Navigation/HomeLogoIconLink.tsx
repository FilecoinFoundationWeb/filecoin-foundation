'use client'

import {
  HomeLogoLink,
  type HomeLogoLinkProps,
} from '@filecoin-foundation/ui-filecoin/HomeLogoLink'

import IconLogo from '@/assets/logos/filecoin-logo-icon.svg'

type HomeLogoIconLinkProps = Omit<HomeLogoLinkProps, 'logo' | 'height'>

export function HomeLogoIconLink(props: HomeLogoIconLinkProps) {
  return <HomeLogoLink logo={IconLogo} height={40} {...props} />
}
