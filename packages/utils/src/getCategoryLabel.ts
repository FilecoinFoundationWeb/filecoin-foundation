import { getCMSFieldOptions, getCollectionConfig } from './cmsConfigUtils'

export type GetCategoryLabelParams<CollectionName extends string> = {
  collectionName: CollectionName
  category: string
  configData: unknown
  fieldName?: string
}

export function getCategoryLabel<CollectionName extends string>({
  collectionName,
  category,
  configData,
  fieldName = 'category',
}: GetCategoryLabelParams<CollectionName>) {
  const { fields } = getCollectionConfig(collectionName, configData)
  const categoryOptions = getCMSFieldOptions(fields, fieldName)
  const option = categoryOptions.find((option) => option.value === category)

  return option ? option.label : category
}
