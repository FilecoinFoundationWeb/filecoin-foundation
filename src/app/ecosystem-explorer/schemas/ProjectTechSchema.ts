import { z } from 'zod'

import type { CMSFieldConfig } from '@/types/cmsConfig'

import configJson from '@/data/cmsConfigSchema.json'

import { findOrThrow } from '@/utils/findOrThrow'

const ecosystemCollection = findOrThrow(
  configJson.collections,
  (collection) => collection.name === 'ecosystem_projects',
)

const ecosystemFields = ecosystemCollection.fields as Array<CMSFieldConfig>

const techField = findOrThrow(ecosystemFields, (field) => field.name === 'tech')

const options = techField.options as unknown as Array<string>

const [firstOption, ...otherOptions] = options
const OptionEnum = z.enum([firstOption, ...otherOptions])

export const ProjectTechSchema = z
  .array(OptionEnum)
  .nonempty()
  .max(options.length)
