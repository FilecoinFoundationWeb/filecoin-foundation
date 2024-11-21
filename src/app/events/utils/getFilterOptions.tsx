import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'
import { type CMSCollectionName } from '@/types/cmsConfig'

type EventFilter = 'category' | 'location.region'

export function getFilterOptions(
  collectionName: CMSCollectionName,
  filters: Record<string, EventFilter>,
) {
  const { validIds: validCategoryIds, options: categoryOptions } =
    getCMSFieldOptionsAndValidIds({
      collectionName,
      fieldName: filters.category,
    })

  const { validIds: validLocationIds, options: locationOptions } =
    getCMSFieldOptionsAndValidIds({
      collectionName,
      fieldName: filters['location.region'],
    })

  return {
    category: { validIds: validCategoryIds, options: categoryOptions },
    location: { validIds: validLocationIds, options: locationOptions },
  }
}
