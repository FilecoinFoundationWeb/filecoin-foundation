import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { CTASection } from '@/components/CTASection'
import { SmartTextLink } from '@/components/SmartTextLink'

export function CTAPageSection() {
  return (
    <CTASection
      title="Connect With Us"
      description={
        <>
          To get involved, visit the{' '}
          <SmartTextLink
            href={FILECOIN_FOUNDATION_URLS.governance.social.github.href}
          >
            Governance GitHub
          </SmartTextLink>
          , join the conversation in the{' '}
          <SmartTextLink
            href={FILECOIN_FOUNDATION_URLS.governance.social.slack.href}
          >
            {`${FILECOIN_FOUNDATION_URLS.governance.social.slack.label} Slack channel`}
          </SmartTextLink>
          , or follow{' '}
          <SmartTextLink
            href={FILECOIN_FOUNDATION_URLS.governance.social.twitter.href}
          >
            {FILECOIN_FOUNDATION_URLS.governance.social.twitter.label}
          </SmartTextLink>{' '}
          on X.
        </>
      }
    />
  )
}
