import { z } from 'zod'

import { getCollectionConfig, getCMSFieldOptions } from '@/utils/cmsConfigUtils'
import { createEnumSchema } from '@/utils/zodUtils'

const ecosystemConfig = getCollectionConfig('ecosystem_projects')

const techOptions = getCMSFieldOptions(
  ecosystemConfig.fields,
  'tech',
) as unknown as Array<string>

const TechSchema = createEnumSchema(techOptions)

export const ProjectTechSchema = z.array(TechSchema).nonempty()
