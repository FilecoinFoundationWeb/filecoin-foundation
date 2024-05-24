import { PrivacyPolicyData } from '@/types/privacyPolicyTypes'

import { transformPolicyAndTermsMarkdownToItemData } from '@/utils/transformMarkdownToItemData'

import { CONTENT_PAGES_ROOT } from '@/constants/paths'

import { mapMarkdownToPrivacyPolicyData } from './mapMarkdownToPrivacyPolicyData'

const PRIVACY_POLICY_DIRECTORY_NAME = 'pages'
const PRIVACY_POLICY_COLLECTION_NAME = 'privacy-policy'

export function getPrivacyData(): PrivacyPolicyData {
  return transformPolicyAndTermsMarkdownToItemData<PrivacyPolicyData>(
    CONTENT_PAGES_ROOT,
    PRIVACY_POLICY_DIRECTORY_NAME,
    PRIVACY_POLICY_COLLECTION_NAME,
    mapMarkdownToPrivacyPolicyData,
  )
}
