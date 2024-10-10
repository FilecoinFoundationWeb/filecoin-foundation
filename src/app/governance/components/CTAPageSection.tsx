import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { CTASection } from '@/components/CTASection'
import { TextLink } from '@/components/TextLink'

export function CTAPageSection() {
  return (
    <CTASection
      title="Connect With Us"
      description={
        <>
          To get involved, visit the{' '}
          <TextLink
            href={FILECOIN_FOUNDATION_URLS.governance.social.github.href}
          >
            Governance GitHub
          </TextLink>
          , join the conversation in the{' '}
          <TextLink
            href={FILECOIN_FOUNDATION_URLS.governance.social.slack.href}
          >
            {FILECOIN_FOUNDATION_URLS.governance.social.slack.label} Slack
            channel
          </TextLink>
          , or follow{' '}
          <TextLink
            href={FILECOIN_FOUNDATION_URLS.governance.social.twitter.href}
          >
            {FILECOIN_FOUNDATION_URLS.governance.social.twitter.label}
          </TextLink>{' '}
          on X.
        </>
      }
    />
  )
}
