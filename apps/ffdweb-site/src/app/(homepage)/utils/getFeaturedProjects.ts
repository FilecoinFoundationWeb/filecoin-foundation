import { getProjectData } from '@/projects/utils/getProjectData'

type Slugs = Array<string> | ReadonlyArray<string>

export async function getFeaturedProjects(slugs: Slugs) {
  const projectPromises = slugs.map((slug) => getProjectData(slug))
  return Promise.all(projectPromises)
}
