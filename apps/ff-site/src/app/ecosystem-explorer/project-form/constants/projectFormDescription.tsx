import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { extractEmailAddress } from '@/utils/extractEmailAddress'


export const PROJECT_FORM_DESCRIPTION = [
  <>
    Let&apos;s get started with some basic information about what you&apos;re
    building. Please submit your project to the Filecoin ecosystem page below.
    To update an existing project, send an email to{' '}
    <ExternalTextLink href={FILECOIN_FOUNDATION_URLS.ecosystem.email.href}>
      {extractEmailAddress(FILECOIN_FOUNDATION_URLS.ecosystem.email.href)}
    </ExternalTextLink>
    .
  </>,
  <>
    Want to be a featured project? Share your project page on X and tag{' '}
    <ExternalTextLink href={FILECOIN_FOUNDATION_URLS.social.twitter.href}>
      {FILECOIN_FOUNDATION_URLS.social.twitter.handle}
    </ExternalTextLink>{' '}
    to be considered!
  </>,
]
