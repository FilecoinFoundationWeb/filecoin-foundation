import { generateSitemap } from '@filecoin-foundation/utils/generateSitemap'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { getBlogPostsData } from '@/blog/utils/getBlogPostData'
import { getProjectsData } from '@/projects/utils/getProjectData'

export default async function sitemap() {
  return await generateSitemap({
    paths: PATHS,
    baseUrl: BASE_URL,
    dynamicRoutes: [
      {
        getData: getBlogPostsData,
        basePath: PATHS.BLOG.path,
      },
      // #todo: Add digest articles and issues
      {
        getData: getProjectsData,
        basePath: PATHS.PROJECTS.path,
      },
    ],
  })
}
