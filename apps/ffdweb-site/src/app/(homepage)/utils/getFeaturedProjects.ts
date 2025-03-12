import { getProjectData } from '@/projects/utils/getProjectData'

export async function getProjectsBySlugs(slugs: string[]) {
  const projectPromises = slugs.map((slug) => getProjectData(slug))
  return Promise.all(projectPromises)
}
