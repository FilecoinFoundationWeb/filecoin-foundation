import { TextLink } from '@/components/TextLink'

import { SOCIAL_MEDIA_URLS } from '@/constants/siteMetadata'

type SectionDeepDiveProps = {
  children: React.ReactNode
}

export function SectionDeepDive({ children }: SectionDeepDiveProps) {
  return (
    <section>
      <header>
        <h2>Dive Deeper</h2>
        <p>
          Join our talks, community meetings, and other events. To explore them,{' '}
          <TextLink href={SOCIAL_MEDIA_URLS.youtube}>
            visit our YouTube channel
          </TextLink>
          .
        </p>
      </header>

      <div>{children}</div>
    </section>
  )
}
