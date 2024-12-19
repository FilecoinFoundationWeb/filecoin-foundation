import { getCMSFieldOptions, getCollectionConfig } from '@/utils/cmsConfigUtils'

export function getEcosystemCMSCategories() {
  const { fields } = getCollectionConfig('ecosystem_projects')
  return getCMSFieldOptions(fields, 'category')
}
