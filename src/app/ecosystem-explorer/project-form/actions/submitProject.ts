'use server'

import slugify from 'slugify'

import { ECOSYSTEM_EXPLORER_DIRECTORY_PATH } from '@/ecosystem-explorer/utils/getEcosystemProjectData'

import type {
  EcosystemProjectFormDataWithoutLogo,
  FormattedFile,
} from '../types'
import { buildEcosystemMarkdownTemplate } from '../utils/buildEcosystemMarkdownTemplate'
import { formatFormData } from '../utils/formatFormData'
import { getFolderPaths } from '../utils/getFolderPaths'
import { submitProjectToGithub } from '../utils/submitProjectToGithub'

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
  const fileNameWithExtension = `${slug}.${formattedFile.format}`

  const { publicAssetsFolder, assetsFolder } = getFolderPaths()

  const formattedFormData = formatFormData(formDataWithoutLogo)

  const markdownTemplate = buildEcosystemMarkdownTemplate({
    ...formattedFormData,
    image: { src: `${assetsFolder}/${fileNameWithExtension}` },
  })

  const pullRequest = await submitProjectToGithub({
    slug,
    message: 'New Ecosystem Project',
    markdown: {
      template: markdownTemplate,
      path: `${ECOSYSTEM_EXPLORER_DIRECTORY_PATH}/${slug}.md`,
    },
    file: {
      base64: formattedFile.base64,
      path: `${publicAssetsFolder}/${fileNameWithExtension}`,
    },
  })

  return pullRequest
}
