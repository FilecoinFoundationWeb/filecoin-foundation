'use server'

import slugify from 'slugify'

import type { EcosystemProjectFormDataWithoutLogo } from '../schema/EcosystemProjectFormSchema'
import type { Timestamps } from '../types'
import { buildEcosystemMarkdownTemplate } from '../utils/buildEcosystemMarkdownTemplate'
import {
  enrichFormData,
  type EnrichFormDataParams,
} from '../utils/enrichFormData'
import { formatFormData } from '../utils/formatFormData'
import {
  submitProjectToGithub,
  type SubmitProjectParams,
} from '../utils/submitProjectToGithub'

type SubmitProjectWithoutLogoParams = {
  formDataWithoutLogo: EcosystemProjectFormDataWithoutLogo
  existingProjectData: EnrichFormDataParams['existingProjectData']
  image: EnrichFormDataParams['image']
  prTitle: SubmitProjectParams['prTitle']
  timestamps: Timestamps
}

export async function submitProjectWithoutNewLogo({
  formDataWithoutLogo,
  timestamps,
  existingProjectData,
  image,
}: SubmitProjectWithoutLogoParams) {
  const slug = slugify(formDataWithoutLogo.projectName, {
    lower: true,
    strict: true,
  })

  const formattedFormData = formatFormData(formDataWithoutLogo)

  const enrichedFormData = enrichFormData({
    formattedFormData,
    existingProjectData,
    image,
    timestamps,
  })

  const markdownTemplate = buildEcosystemMarkdownTemplate(enrichedFormData)

  const pullRequest = await submitProjectToGithub({
    slug,
    markdownTemplate,
    prTitle: 'Ecosystem Project Update',
  })

  return pullRequest
}
