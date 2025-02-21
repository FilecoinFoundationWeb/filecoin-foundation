import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { CTASection } from '@/components/CTASection'
import { ExternalTextLink } from '@/components/TextLink/ExternalTextLink'

export function CTAPageSection() {
  return (
    <CTASection
      title="Connect With Us"
      description={
        <>
          To get involved, visit the{' '}
          <ExternalTextLink
            href={FILECOIN_FOUNDATION_URLS.governance.social.github.href}
          >
            Governance GitHub
          </ExternalTextLink>
          , join the conversation in the{' '}
          <ExternalTextLink
            href={FILECOIN_FOUNDATION_URLS.governance.social.slack.href}
          >
            {`${FILECOIN_FOUNDATION_URLS.governance.social.slack.label} Slack channel`}
          </ExternalTextLink>
          , or follow{' '}
          <ExternalTextLink
            href={FILECOIN_FOUNDATION_URLS.governance.social.twitter.href}
          >
            {FILECOIN_FOUNDATION_URLS.governance.social.twitter.label}
          </ExternalTextLink>{' '}
          on X.
        </>
      }
    />
  )
}
