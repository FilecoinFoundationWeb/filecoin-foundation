import { type CMSCategoryFieldMapping } from '@/types/categoryTypes'

export const CMS_CATEGORY_FIELD_MAPPING: CMSCategoryFieldMapping = {
  blog: {
    collection: 'blog',
    field: 'category',
  },
  ecosystem: {
    collection: 'ecosystem_projects',
    field: 'category',
  },
  events: {
    collection: 'events',
    field: 'involvement',
  },
} as const
