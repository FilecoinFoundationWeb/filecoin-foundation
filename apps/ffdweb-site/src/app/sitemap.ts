import { generateDigestSitemapRoutes } from '@filecoin-foundation/utils/generateDigestSitemapRoutes'
import { generateSitemap } from '@filecoin-foundation/utils/generateSitemap'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { blogPostCollection } from '@/qino/collections/blogPosts'
import { projectCollection } from '@/qino/collections/projects'

export default async function sitemap() {
  const routes = await generateSitemap({
    paths: PATHS,
    baseUrl: BASE_URL,
    dynamicRoutes: [
      {
        getData: withSlug(blogPostCollection),
        basePath: PATHS.BLOG.path,
      },
      {
        getData: withSlug(projectCollection),
        basePath: PATHS.PROJECTS.path,
      },
    ],
  })

  const { path, issuesContentPath, articlesContentPath } = PATHS.DIGEST

  const digestRoutes = await generateDigestSitemapRoutes({
    digestPath: path,
    baseUrl: BASE_URL,
    issuesContentPath,
    articlesContentPath,
  })

  return [...routes, ...digestRoutes]
}

type EntryWithMeta = {
  _meta: { slug: string }
}

function withSlug<Entry extends EntryWithMeta>(collection: {
  getEntries: () => Promise<Array<Entry>>
}) {
  return async function () {
    const entries = await collection.getEntries()
    return entries.map((entry) => ({ ...entry, slug: entry._meta.slug }))
  }
}
