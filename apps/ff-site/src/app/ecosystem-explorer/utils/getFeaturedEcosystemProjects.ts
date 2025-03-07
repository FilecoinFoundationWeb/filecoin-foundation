import { extractSlugFromFilename } from '@filecoin-foundation/utils/fileUtils'

import { getEcosystemProjectsData } from './getEcosystemProjectData'

export async function getFeaturedEcosystemProjects(paths: Array<string>) {
  const ecosystemProjects = await getEcosystemProjectsData()
  const slugs = paths.map(extractSlugFromFilename)
  return ecosystemProjects.filter((item) => slugs.includes(item.slug))
}
