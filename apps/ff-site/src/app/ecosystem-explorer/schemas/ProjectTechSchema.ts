import {
  getCollectionConfig,
  getCMSFieldOptions,
} from '@filecoin-foundation/utils/cmsConfigUtils'
import { z } from 'zod'

import configData from '@/data/cmsConfigSchema.json'

import { createEnumSchema } from '@/utils/zodUtils'


const ecosystemConfig = getCollectionConfig('ecosystem_projects', configData)

const techOptions = getCMSFieldOptions(
  ecosystemConfig.fields,
  'tech',
) as unknown as Array<string>

const TechSchema = createEnumSchema(techOptions)

export const ProjectTechSchema = z.array(TechSchema).nonempty()
