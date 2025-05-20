import { Button } from '@filecoin-foundation/ui/Button'
import type { CTAProps } from '@filecoin-foundation/utils/types/ctaType'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

export type PageHeaderCTAProps = CTAProps

export function PageHeaderCTA({ href, text, ariaLabel }: PageHeaderCTAProps) {
  return (
    <Button href={href} baseDomain={BASE_DOMAIN} aria-label={ariaLabel}>
      {text}
    </Button>
  )
}
