import type { TranslationFunction } from '@/i18n/types'

import type { SimpleCardData } from '@filecoin-foundation/ui-filecoin/SimpleCard'

import { FIL_FRAME_URL, FILECOIN_DOCS_URLS } from '@/constants/siteMetadata'

export function getQuickstart(t: TranslationFunction) {
  return [
    {
      title: t('quickstart.whatIsFilecoin.title'),
      description: t('quickstart.whatIsFilecoin.description'),
      cta: {
        href: FILECOIN_DOCS_URLS.basicsWhatIsFilecoin,
        text: t('quickstart.whatIsFilecoin.cta'),
      },
    },
    {
      title: t('quickstart.builderCookbook.title'),
      description: t('quickstart.builderCookbook.description'),
      cta: {
        href: FILECOIN_DOCS_URLS.builderCookbook,
        text: t('quickstart.builderCookbook.cta'),
      },
    },
    {
      title: t('quickstart.filFrame.title'),
      description: t('quickstart.filFrame.description'),
      cta: {
        href: FIL_FRAME_URL,
        text: t('quickstart.filFrame.cta'),
      },
    },
  ] satisfies Array<SimpleCardData>
}
