import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { CTASection } from '@/components/CTASection'

export function CTAPageSection() {
  return (
    <CTASection
      title="Explore the Program"
      description="For complete details on eligible targets, submission guidelines, and reward tiers, visit the Filecoin bug bounty program on Immunefi."
      cta={{
        href: FILECOIN_FOUNDATION_URLS.security.bugBountyProgram,
        text: 'Explore the Program',
      }}
    />
  )
}
