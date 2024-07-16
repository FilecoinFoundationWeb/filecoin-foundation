import { PATHS } from '../../../src/app/_constants/paths'
import { createCategoryTests } from '../../support/categoryUtils'

const ecosystemExplorerCategories = [
  'artificial-intelligence',
  'education-academia-health',
  'finance',
  'media-entertainment',
  'network',
  'public-goods-dweb',
  'science-climate-space',
  'storage',
  'tooling-productivity',
]

createCategoryTests({
  pathConfig: PATHS.ECOSYSTEM_EXPLORER,
  categories: ecosystemExplorerCategories,
  categoryType: 'category',
})
