import type { MetadataRoute } from 'next'

type GenerateRobotsTxtProps = {
  baseUrl: string
}

export function generateRobotsTxt({ baseUrl }: GenerateRobotsTxtProps) {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  } as const satisfies MetadataRoute.Robots
}
