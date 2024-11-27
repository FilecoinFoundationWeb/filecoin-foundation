'use server'

import slugify from 'slugify'

import { submitProjectToGithub } from '../services/github'
import type {
  EcosystemProjectFormDataWithoutLogo,
  FormattedLogo,
} from '../types'
import { buildEcosystemMarkdownTemplate } from '../utils/buildEcosystemMarkdownTemplate'
import { formatFormData } from '../utils/formatFormData'
import { getFolderPaths } from '../utils/getFolderPaths'

type SubmitProjectParams = {
  formattedLogo: FormattedLogo
  formDataWithoutLogo: EcosystemProjectFormDataWithoutLogo
}

export async function submitProject({
  formattedLogo,
  formDataWithoutLogo,
}: SubmitProjectParams) {
  const slug = slugify(formDataWithoutLogo.title, {
    lower: true,
    strict: true,
  })
  const logoName = `${slug}.${formattedLogo.format}`

  const { publicAssetsFolder, assetsFolder } = getFolderPaths()

  const formattedFormData = formatFormData(formDataWithoutLogo)

  const markdownTemplate = buildEcosystemMarkdownTemplate({
    ...formattedFormData,
    image: { src: `${assetsFolder}/${logoName}` },
  })

  const pullRequest = await submitProjectToGithub({
    slug,
    markdownTemplate,
    logo: {
      path: `${publicAssetsFolder}/${logoName}`,
      base64: formattedLogo.base64,
    },
    prTitle: 'New Ecosystem Project',
  })

  return pullRequest
}
