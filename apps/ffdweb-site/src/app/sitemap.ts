import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

export default async function sitemap() {
  const staticRoutes = Object.values(PATHS).map((pathConfig) => ({
    url: `${BASE_URL}${pathConfig.path}`,
    lastModified: new Date(),
    priority: pathConfig.path === '/' ? 1.0 : 0.7,
  }))

  return [...staticRoutes]
}
