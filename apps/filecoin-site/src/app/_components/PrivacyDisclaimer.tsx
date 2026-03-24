import { useTranslations } from 'next-intl'

import { ExternalTextLink } from '@filecoin-foundation/ui-filecoin/TextLink/ExternalTextLink'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

export function PrivacyDisclaimer() {
  const t = useTranslations('privacyDisclaimer')

  return (
    <p className="text-(--color-paragraph-text)">
      {t.rich('text', {
        privacyPolicyLink: (chunks) => (
          <ExternalTextLink href={FILECOIN_FOUNDATION_URLS.privacyPolicy.href}>
            {chunks}
          </ExternalTextLink>
        ),
      })}
    </p>
  )
}
