import type { EcosystemProject } from '@/types/ecosystemProjectType'

import type { Timestamps } from '../types'

import type { MarkdownTemplateParams } from './buildEcosystemMarkdownTemplate'
import type { FormattedFormData } from './formatFormData'

export type EnrichFormDataParams = {
  formattedFormData: FormattedFormData
  timestamps: Timestamps
  image: NonNullable<EcosystemProject['image']>
  existingProjectData?: Partial<EcosystemProject>
}

export function enrichFormData({
  timestamps,
  formattedFormData,
  image,
  existingProjectData = {},
}: EnrichFormDataParams): MarkdownTemplateParams {
  return {
    ...existingProjectData,
    ...formattedFormData,
    ...timestamps,
    image,
  }
}
