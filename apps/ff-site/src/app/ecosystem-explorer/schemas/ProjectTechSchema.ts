import { z } from 'zod'

import {
  getCollectionConfig,
  getCMSFieldOptions,
} from '@filecoin-foundation/utils/cmsConfigUtils'
import { createEnumSchema } from '@filecoin-foundation/utils/zodUtils'

import configData from '@/data/cmsConfigSchema.json'


const ecosystemConfig = getCollectionConfig('ecosystem_projects', configData)

const techOptions = getCMSFieldOptions(
  ecosystemConfig.fields,
  'tech',
) as unknown as Array<string>

const TechSchema = createEnumSchema(techOptions)

export const ProjectTechSchema = z.array(TechSchema).nonempty()
