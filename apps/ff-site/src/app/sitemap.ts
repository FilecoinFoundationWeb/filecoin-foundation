import { generateSitemap } from '@filecoin-foundation/utils/generateSitemap'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { blogPostCollection } from '@/qino/collections/blogPosts'
import { digestIssueCollection } from '@/qino/collections/digestIssues'
import { ecosystemProjectCollection } from '@/qino/collections/ecosystemProjects'
import { eventCollection } from '@/qino/collections/events'
import { monthlyUpdateCollection } from '@/qino/collections/monthlyUpdates'

import { getDigestArticlesData } from '@/digest/utils/getDigestArticleData'

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
        getData: withSlug(ecosystemProjectCollection),
        basePath: PATHS.ECOSYSTEM_EXPLORER.path,
      },
      {
        getData: withSlug(eventCollection),
        basePath: PATHS.EVENTS.path,
      },
      {
        getData: withSlug(monthlyUpdateCollection),
        basePath: PATHS.FIL_PLUS_MONTHLY_UPDATES.path,
      },
    ],
  })

  const digestRoutes = await generateDigestRoutes()

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

async function generateDigestRoutes() {
  const [issues, articles] = await Promise.all([
    digestIssueCollection.getEntries(),
    getDigestArticlesData(),
  ])

  const issueRoutes = issues.map(({ issuePath, updatedOn }) => ({
    url: `${BASE_URL}${PATHS.DIGEST.path}/${issuePath}`,
    lastModified: updatedOn.toISOString(),
  }))

  const articleRoutes = articles.map(({ articlePath, updatedOn }) => ({
    url: `${BASE_URL}${PATHS.DIGEST.path}/${articlePath}`,
    lastModified: updatedOn.toISOString(),
  }))

  return [...issueRoutes, ...articleRoutes]
}
