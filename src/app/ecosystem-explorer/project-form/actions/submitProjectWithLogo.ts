'use server'

import slugify from 'slugify'

import type { EcosystemProjectFormDataWithoutLogo } from '../schema/EcosystemProjectFormSchema'
import type { Timestamps } from '../types'
import { buildEcosystemMarkdownTemplate } from '../utils/buildEcosystemMarkdownTemplate'
import { enrichFormData } from '../utils/enrichFormData'
import { type FormattedLogo } from '../utils/fileUtils'
import { formatFormData } from '../utils/formatFormData'
import {
  submitProjectToGithub,
  type SubmitProjectParams,
} from '../utils/submitProjectToGithub'

import { getFolderPaths } from './getFolderPaths'

type SubmitProjectWithLogoParams = {
  formattedLogo: FormattedLogo
  formDataWithoutLogo: EcosystemProjectFormDataWithoutLogo
  prTitle: SubmitProjectParams['prTitle']
  timestamps: Timestamps
}

export async function submitProjectWithLogo({
  formattedLogo,
  formDataWithoutLogo,
  timestamps,
  prTitle,
}: SubmitProjectWithLogoParams) {
  const slug = slugify(formDataWithoutLogo.projectName, {
    lower: true,
    strict: true,
  })

  const { publicAssetsFolder, assetsFolder } = await getFolderPaths()
  const assetPath = `${assetsFolder}/${slug}.${formattedLogo.format}`
  const publicAssetPath = `${publicAssetsFolder}/${slug}.${formattedLogo.format}`

  const formattedFormData = formatFormData(formDataWithoutLogo)

  const enrichedFormData = enrichFormData({
    formattedFormData,
    timestamps,
    image: { src: assetPath },
  })

  const markdownTemplate = buildEcosystemMarkdownTemplate(enrichedFormData)

  const pullRequest = await submitProjectToGithub({
    slug,
    markdownTemplate,
    logo: { base64: formattedLogo.base64, path: publicAssetPath },
    prTitle,
  })

  return pullRequest
}
