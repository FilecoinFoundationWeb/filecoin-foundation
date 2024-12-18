import { getCMSFieldOptions, getCollectionConfig } from '@/utils/cmsConfigUtils'

export function getCMSOptionsForField(fieldName: 'category' | 'subcategory') {
  const { fields } = getCollectionConfig('ecosystem_projects')
  return getCMSFieldOptions(fields, fieldName)
}
