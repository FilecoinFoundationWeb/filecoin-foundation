'use server'

import slugify from 'slugify'

import { submitProjectToGithub } from '../services/github'
import type {
  EcosystemProjectFormDataWithoutLogo,
  FormattedFile,
} from '../types'
import { buildEcosystemMarkdownTemplate } from '../utils/buildEcosystemMarkdownTemplate'
import { formatFormData } from '../utils/formatFormData'
import { getFolderPaths } from '../utils/getFolderPaths'

type SubmitProjectParams = {
  formattedFile: FormattedFile
  formDataWithoutLogo: EcosystemProjectFormDataWithoutLogo
}

export async function submitProject({
  formattedFile,
  formDataWithoutLogo,
}: SubmitProjectParams) {
  const slug = slugify(formDataWithoutLogo.title, {
    lower: true,
    strict: true,
  })
  const fileName = `${slug}.${formattedFile.format}`

  const { publicAssetsFolder, assetsFolder } = getFolderPaths()

  const formattedFormData = formatFormData(formDataWithoutLogo)

  const markdownTemplate = buildEcosystemMarkdownTemplate({
    ...formattedFormData,
    image: { src: `${assetsFolder}/${fileName}` },
  })

  const pullRequest = await submitProjectToGithub({
    slug,
    markdownTemplate,
    logo: {
      path: `${publicAssetsFolder}/${fileName}`,
      base64: formattedFile.base64,
    },
    prTitle: 'New Ecosystem Project',
  })

  return pullRequest
}
