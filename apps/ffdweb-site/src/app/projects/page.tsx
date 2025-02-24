import { FFDW_URLS } from '@/constants/siteMetadata'

import { createMetadata } from '@/utils/createMetadata'

import { CTASection } from '@/components/CTASection'

export default function Projects() {
  return (
    <>
      <header>
        <span>Projects</span>
        <h1>Discover Current and Past FFDW Project Partners</h1>
      </header>

      <CTASection
        kicker="Work with FFDW"
        title="Help FFDW Build a Better Web for Everyone"
        cta={{
          href: FFDW_URLS.email,
          text: 'Contact Us',
        }}
      />
    </>
  )
}

export const metadata = createMetadata({
  metaTitle:
    'FFDW Projects | Explore Partnerships Advancing the Decentralized Web',
  metaDescription:
    'Explore how FFDW collaborates with nonprofits to build open-source solutions, preserve vital data, and shape a decentralized internet. See our partners in action.',
  overrideTitle: true,
})
