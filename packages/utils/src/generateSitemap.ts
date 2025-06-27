import type { DynamicBaseData } from './schemas/DynamicDataBaseSchema'

type GenericEntryData = {
  updatedOn: DynamicBaseData['updated-on']
  slug: string
}

type GenerateDynamicRoutesProps<T extends GenericEntryData> = {
  data: Array<T>
  basePath: string
  baseUrl: string
}

type DynamicRouteConfig = {
  getData: () => Promise<Array<GenericEntryData>>
  basePath: string
}

type SitemapConfig = {
  paths: Record<string, { path: string }>
  baseUrl: string
  dynamicRoutes?: Array<DynamicRouteConfig>
}

export async function generateSitemap({
  paths,
  baseUrl,
  dynamicRoutes,
}: SitemapConfig) {
  const staticRoutes = Object.values(paths).map((pathConfig) => ({
    url: `${baseUrl}${pathConfig.path}`,
    lastModified: new Date(),
    priority: pathConfig.path === '/' ? 1.0 : 0.7,
  }))

  if (!dynamicRoutes) {
    return staticRoutes
  }

  const dynamicRoutesPromises = dynamicRoutes.map((config) =>
    generateDynamicSitemapEntries(config, baseUrl),
  )

  const dynamicRoutesResults = await Promise.all(dynamicRoutesPromises)
  const allDynamicRoutes = dynamicRoutesResults.flat()

  return [...staticRoutes, ...allDynamicRoutes]
}

async function generateDynamicSitemapEntries(
  config: DynamicRouteConfig,
  baseUrl: string,
) {
  const { getData, basePath } = config
  const entries = await getData()

  return generateDynamicRoutes({
    data: entries,
    basePath,
    baseUrl,
  })
}

function generateDynamicRoutes<T extends GenericEntryData>({
  data,
  basePath,
  baseUrl,
}: GenerateDynamicRoutesProps<T>) {
  return data.map(({ slug, updatedOn }) => ({
    url: `${baseUrl}${basePath}/${slug}`,
    lastModified: updatedOn.toISOString(),
  }))
}
