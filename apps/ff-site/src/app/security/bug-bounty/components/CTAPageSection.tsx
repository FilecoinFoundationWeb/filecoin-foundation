import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { CTASection } from '@/components/CTASection'

export function CTAPageSection() {
  return (
    <CTASection
      title="Explore the Program"
      description="For complete details of the Filecoin Bug Bounty program, visit Immunefi."
      cta={{
        href: FILECOIN_FOUNDATION_URLS.security.bugBountyProgram,
        text: 'Explore the Program',
      }}
    />
  )
}
