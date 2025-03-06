import { createEnumSchema } from '@filecoin-foundation/utils/zodUtils'

import { getEcosystemCMSCategories } from '../utils/getEcosystemCMSCategories'

const categoryOptions = getEcosystemCMSCategories()
const categoryValues = categoryOptions.map((option) => option.value)

export const CategorySchema = createEnumSchema(categoryValues)
