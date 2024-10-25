import { z } from 'zod'

import type { CMSFieldConfig } from '@/types/cmsConfig'

import configJson from '@/data/cmsConfigSchema.json'

import { createCategorySchema } from '@/utils/categoryUtils'
import { findOrThrow } from '@/utils/findOrThrow'

const ecosystemCollection = findOrThrow(
  configJson.collections,
  (collection) => collection.name === 'ecosystem_projects',
)

const ecosystemFields = ecosystemCollection.fields as Array<CMSFieldConfig>

const techField = findOrThrow(ecosystemFields, (field) => field.name === 'tech')
const options = techField.options as unknown as Array<string>

const OptionValueSchema = createCategorySchema(options)

export const ProjectTechSchema = z.array(OptionValueSchema).nonempty()
