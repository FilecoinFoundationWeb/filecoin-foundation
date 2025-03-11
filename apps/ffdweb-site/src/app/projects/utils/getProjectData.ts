import { getAllMarkdownData } from '@filecoin-foundation/utils/getAllMarkdownData'
import { getMarkdownData } from '@filecoin-foundation/utils/getMarkdownData'

import { PATHS } from '@/constants/paths'

import { ProjectFrontmatterSchema } from '../schemas/ProjectFrontmatterSchema'

const PROJECTS_DIRECTORY_PATH = PATHS.PROJECTS.entriesContentPath as string

export async function getProjectData(slug: string) {
  const data = await getProjectMarkdownData(slug)
  return transformProjectData(data)
}

export async function getProjectsData() {
  const allProjects = await getAllMarkdownData({
    directoryPath: PROJECTS_DIRECTORY_PATH,
    zodSchema: ProjectFrontmatterSchema,
  })

  return allProjects.map(transformProjectData)
}

function getProjectMarkdownData(slug: string) {
  return getMarkdownData({
    slug,
    directoryPath: PROJECTS_DIRECTORY_PATH,
    zodSchema: ProjectFrontmatterSchema,
  })
}

function transformProjectData(
  project: Awaited<ReturnType<typeof getProjectMarkdownData>>,
) {
  return {
    ...project,
    seo: {
      ...project.seo,
      title: project.seo.title || project.title,
    },
  }
}
