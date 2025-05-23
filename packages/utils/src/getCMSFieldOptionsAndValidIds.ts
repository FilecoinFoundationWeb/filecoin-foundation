import { getCMSFieldOptions, getCollectionConfig } from './cmsConfigUtils'
import { mapCMSOptionsToListboxFormat } from './mapCMSOptionsToListboxFormat'

export type CMSFieldOptionsAndValidIdsParams<CollectionName extends string> = {
  collectionName: CollectionName
  fieldName: string
  configData: unknown
}

export function getCMSFieldOptionsAndValidIds<CollectionName extends string>({
  collectionName,
  fieldName,
  configData,
}: CMSFieldOptionsAndValidIdsParams<CollectionName>) {
  const { fields } = getCollectionConfig(collectionName, configData)
  const cmsOptions = getCMSFieldOptions(fields, fieldName)
  const options = mapCMSOptionsToListboxFormat(cmsOptions)
  const validIds = options.map((setting) => setting.id)

  return { options, validIds }
}
