import {
  Card as SharedCard,
  type CardProps as SharedCardProps,
} from '@filecoin-foundation/ui/Card/Card'
import { CardLink as SharedCardLink } from '@filecoin-foundation/ui/Card/CardLink'
import type { ExtendedCTAProps } from '@filecoin-foundation/utils/types/ctaType'

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

export function CardLink({ ...rest }: CTAWithoutBaseDomain) {
  return <SharedCardLink {...rest} baseDomain={BASE_DOMAIN} />
}
