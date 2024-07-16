import { PATHS } from '../../../src/app/_constants/paths'
import { createCategoryTests } from '../../support/categoryUtils'

const blogCategories = [
  'events',
  'use-case',
  'interview',
  'reports',
  'news',
  'ecosystem',
]

createCategoryTests({
  pathConfig: PATHS.BLOG,
  categories: blogCategories,
  categoryType: 'category',
})
