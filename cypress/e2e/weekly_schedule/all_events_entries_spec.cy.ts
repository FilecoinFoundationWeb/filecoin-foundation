import { PATHS } from '../../../src/app/_constants/paths'
import { createCategoryTests } from '../../support/categoryUtils'

const eventCategories = ['hosted', 'sponsored', 'supported']

createCategoryTests({
  pathConfig: PATHS.EVENTS,
  categories: eventCategories,
  categoryType: 'involvement',
})
