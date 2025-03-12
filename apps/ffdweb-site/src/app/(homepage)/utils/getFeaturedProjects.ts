import { getProjectData } from '@/projects/utils/getProjectData'

export async function getFeaturedProjects(slugs: string[]) {
  const projectPromises = slugs.map((slug) => getProjectData(slug))
  return Promise.all(projectPromises)
}
