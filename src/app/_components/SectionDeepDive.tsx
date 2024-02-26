import { Heading } from '@/components/Heading'
import { TextLink } from '@/components/TextLink'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

type SectionDeepDiveProps = {
  children: React.ReactNode
}

export function SectionDeepDive({ children }: SectionDeepDiveProps) {
  return (
    <section>
      <header>
        <Heading tag="h2" variant="xl">
          Dive Deeper
        </Heading>
        <p>
          Join our talks, community meetings, and other events. To explore them,{' '}
          <TextLink href={FILECOIN_FOUNDATION_URLS.social.youtube.href}>
            visit our YouTube channel
          </TextLink>
          .
        </p>
      </header>

      <div>{children}</div>
    </section>
  )
}
