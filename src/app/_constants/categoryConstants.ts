import {
  type CategoryOptionType,
  type CategorySetting,
} from '@/types/categoryTypes'
import { CMSFieldOption } from '@/types/cmsConfig'

import { getBlogCategories } from '@/_utils/getBlogCategories'

export const DEFAULT_CATEGORY_OPTION: CategoryOptionType = 'all'

export function transformCategoryOptionsToSettings(
  options: CMSFieldOption[],
): CategorySetting[] {
  return options.map((option) => ({
    id: option.value,
    name: option.label,
  }))
}

const categoryOptions = getBlogCategories()
export const blogCategorySettings: CategorySetting[] =
  transformCategoryOptionsToSettings(categoryOptions)

const categoryIds = blogCategorySettings.map((setting) => setting.id)
export type BlogCategoryOptionType =
  | (typeof categoryIds)[number]
  | typeof DEFAULT_CATEGORY_OPTION

export const VALID_BLOG_CATEGORY_OPTIONS = blogCategorySettings.map(
  (setting) => setting.id,
)
