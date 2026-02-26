import type { TranslationFunction } from '@/i18n/types'

import { FILECOIN_DOCS_URLS } from '@/constants/siteMetadata'


export type TutorialsAndGuides = {
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

export function getTutorialsAndGuides(t: TranslationFunction) {
  return [
    {
      title: t('tutorials.basics.title'),
      description: t('tutorials.basics.description'),
      difficulty: 'Beginner' as const,
      difficultyLabel: t('tutorials.difficulty.beginner'),
      cta: {
        href: FILECOIN_DOCS_URLS.basicsWhatIsFilecoin,
        text: t('tutorials.basics.cta'),
      },
    },
    {
      title: t('tutorials.devEnv.title'),
      description: t('tutorials.devEnv.description'),
      difficulty: 'Beginner' as const,
      difficultyLabel: t('tutorials.difficulty.beginner'),
      cta: {
        href: 'https://github.com/FIL-Builders/fil-frame',
        text: t('tutorials.devEnv.cta'),
      },
    },
    {
      title: t('tutorials.connect.title'),
      description: t('tutorials.connect.description'),
      difficulty: 'Beginner' as const,
      difficultyLabel: t('tutorials.difficulty.beginner'),
      cta: {
        href: FILECOIN_DOCS_URLS.builderCookbook,
        text: t('tutorials.connect.cta'),
      },
    },
    {
      title: t('tutorials.storeRetrieve.title'),
      description: t('tutorials.storeRetrieve.description'),
      difficulty: 'Beginner' as const,
      difficultyLabel: t('tutorials.difficulty.beginner'),
      cta: {
        href: FILECOIN_DOCS_URLS.builderCookbook,
        text: t('tutorials.storeRetrieve.cta'),
      },
    },
    {
      title: t('tutorials.programmatic.title'),
      description: t('tutorials.programmatic.description'),
      difficulty: 'Intermediate' as const,
      difficultyLabel: t('tutorials.difficulty.intermediate'),
      cta: {
        href: FILECOIN_DOCS_URLS.builderCookbook,
        text: t('tutorials.programmatic.cta'),
      },
    },
    {
      title: t('tutorials.smartContract.title'),
      description: t('tutorials.smartContract.description'),
      difficulty: 'Intermediate' as const,
      difficultyLabel: t('tutorials.difficulty.intermediate'),
      cta: {
        href: FILECOIN_DOCS_URLS.builderCookbook,
        text: t('tutorials.smartContract.cta'),
      },
    },
    {
      title: t('tutorials.firstDapp.title'),
      description: t('tutorials.firstDapp.description'),
      difficulty: 'Intermediate' as const,
      difficultyLabel: t('tutorials.difficulty.intermediate'),
      cta: {
        href: FILECOIN_DOCS_URLS.builderCookbook,
        text: t('tutorials.firstDapp.cta'),
      },
    },
    {
      title: t('tutorials.advanced.title'),
      description: t('tutorials.advanced.description'),
      difficulty: 'Advanced' as const,
      difficultyLabel: t('tutorials.difficulty.advanced'),
      cta: {
        href: FILECOIN_DOCS_URLS.builderCookbook,
        text: t('tutorials.advanced.cta'),
      },
    },
  ]
}
