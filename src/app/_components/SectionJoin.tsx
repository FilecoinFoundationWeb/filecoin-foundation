import { TextLink } from '@/components/TextLink'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

export function SectionJoin() {
  return (
    <section>
      <h2>Join the Movement</h2>
      <p>
        Join the movement to create the Public Data Commons, an initiative to
        make public data more resilient, accessible, and cost-effective.
      </p>
      <TextLink href={FILECOIN_FOUNDATION_URLS.publicDataCommons.contactForm}>
        Learn More
      </TextLink>
    </section>
  )
}
