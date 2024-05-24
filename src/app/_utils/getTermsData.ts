import { TermsData } from '@/types/termsTypes'

import { CONTENT_PAGES_ROOT } from '@/constants/paths'

import { mapMarkdownToTermsData } from './mapMarkdownToTermsData'
import { transformPolicyAndTermsMarkdownToItemData } from './transformMarkdownToItemData'

const TERMS_DIRECTORY_NAME = 'pages'
const TERMS_COLLECTION_NAME = 'terms'

export function getTermsData(): TermsData {
  return transformPolicyAndTermsMarkdownToItemData<TermsData>(
    CONTENT_PAGES_ROOT,
    TERMS_DIRECTORY_NAME,
    TERMS_COLLECTION_NAME,
    mapMarkdownToTermsData,
  )
}
