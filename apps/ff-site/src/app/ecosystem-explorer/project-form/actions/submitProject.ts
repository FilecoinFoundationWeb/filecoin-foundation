'use server'

import slugify from 'slugify'

import { PATHS, WORKSPACE_ROOT } from '@/constants/paths'

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
      path: `${WORKSPACE_ROOT}/${PATHS.ECOSYSTEM_EXPLORER.entriesContentPath}/${slug}.md`,
    },
    file: {
      base64: formattedFile.base64,
      path: `${publicAssetsFolder}/${fileNameWithExtension}`,
    },
  })

  return pullRequest
}
