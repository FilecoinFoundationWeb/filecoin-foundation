import {
  Card as SharedCard,
  type ExtendedCTAProps,
  type CardProps as SharedCardProps,
} from '@filecoin-foundation/ui/Card'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

type CTAWithoutBaseDomain = Omit<ExtendedCTAProps, 'baseDomain'>

type CardProps = Omit<SharedCardProps, 'cta'> & {
  cta?: CTAWithoutBaseDomain
}

export function Card({ cta, ...rest }: CardProps) {
  const ctaWithBaseDomain = cta && {
    ...cta,
    baseDomain: BASE_DOMAIN,
  }

  return <SharedCard cta={ctaWithBaseDomain} {...rest} />
}

Card.Link = function CardLink({ ...rest }: CTAWithoutBaseDomain) {
  return <SharedCard.Link {...rest} baseDomain={BASE_DOMAIN} />
}
