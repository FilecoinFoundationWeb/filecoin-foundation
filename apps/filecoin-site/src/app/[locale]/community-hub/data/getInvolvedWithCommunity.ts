import type { TranslationFunction } from '@/i18n/types'

import type { SimpleCardData } from '@filecoin-foundation/ui-filecoin/SimpleCard'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'


export function getGetInvolvedWithCommunity(t: TranslationFunction) {
  return [
    {
      title: t('getInvolvedWithCommunity.events.title'),
      description: t('getInvolvedWithCommunity.events.description'),
      cta: {
        href: FILECOIN_FOUNDATION_URLS.events.href,
        text: t('getInvolvedWithCommunity.events.cta'),
      },
    },
    {
      title: t('getInvolvedWithCommunity.orbit.title'),
      description: t('getInvolvedWithCommunity.orbit.description'),
      cta: {
        href: FILECOIN_FOUNDATION_URLS.orbit.href,
        text: t('getInvolvedWithCommunity.orbit.cta'),
      },
    },
    {
      title: t('getInvolvedWithCommunity.calls.title'),
      description: t('getInvolvedWithCommunity.calls.description'),
      cta: {
        href: '#todo',
        text: t('getInvolvedWithCommunity.calls.cta'),
      },
    },
  ] as const satisfies Array<SimpleCardData>
}
