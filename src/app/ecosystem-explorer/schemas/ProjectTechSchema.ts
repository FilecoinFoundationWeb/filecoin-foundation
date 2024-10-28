import { z } from 'zod'

import { createCategorySchema } from '@/utils/categoryUtils'
import { getCollectionConfig, getCMSFieldOptions } from '@/utils/cmsConfigUtils'

const ecosystemConfig = getCollectionConfig('ecosystem_projects')

const ecosystemFields = ecosystemConfig.fields

const techOptions = getCMSFieldOptions(
  ecosystemFields,
  'tech',
) as unknown as Array<string>

const TechOptionEnum = createCategorySchema(techOptions)

export const ProjectTechSchema = z.array(TechOptionEnum).nonempty()
