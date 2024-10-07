'use server'

import type { AllowedImageFormats } from '../services/github/utils/fileUtils'
import { type MarkdownTemplateParams } from '../services/github/utils/markdownUtils'

import { submitProjectToGithub } from './submitProjectToGithub'

type ProjectData = {
  name: string
  email: string
  timestampISO: string
  yearJoinedISO: string
  projectName: MarkdownTemplateParams['projectName']
  category: MarkdownTemplateParams['category']
  subcategories: MarkdownTemplateParams['subcategories']
  tech: MarkdownTemplateParams['tech']
  shortDescription: MarkdownTemplateParams['shortDescription']
  longDescription: MarkdownTemplateParams['longDescription']
  websiteUrl: MarkdownTemplateParams['websiteUrl']
  youtubeEmbedUrl: MarkdownTemplateParams['youtubeUrl']
  githubUrl: MarkdownTemplateParams['githubUrl']
  xUrl: MarkdownTemplateParams['xUrl']
}

type ProjectLogo = {
  base64: string
  format: AllowedImageFormats
}

type UpdateOptions = {
  projectTitleHasChanged: boolean
  logoHasChanged: boolean
}

type UpdateProjectParams = {
  data: ProjectData
  logo: ProjectLogo
  options: UpdateOptions
}

export async function updateProjectOnGitHub({
  data,
  logo,
  options,
}: UpdateProjectParams) {
  // TODO
  // 1. If the project title has changed, we need to resubmit everything as if it was an initial submission
  // => the markdown file and logo file will have different names

  // 2. If the uploaded logo has changed, we also need to resubmit everything
  // 2.a -> if only the logo changes maybe we can just re-upload the file with the markdown template?

  // If only the project text has changed, we can simply re-upload the markdown file without the logo.

  return submitProjectToGithub({ data, logo })
}
