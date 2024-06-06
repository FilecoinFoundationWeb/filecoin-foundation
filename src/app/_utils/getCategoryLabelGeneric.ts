import { getCollectionConfig, getCMSFieldOptions } from '@/utils/cmsConfigUtils'

type GetCategoryLabelParams<T> = {
  collectionName: string
  fieldName: keyof T
  category: string
}

export function getCategoryLabelGeneric<T>({
  collectionName,
  fieldName,
  category,
}: GetCategoryLabelParams<T>) {
  const { fields } = getCollectionConfig(collectionName)
  const categoryOptions = getCMSFieldOptions(fields, fieldName as string)
  const option = categoryOptions.find((option) => option.value === category)

  return option ? option.label : category
}
