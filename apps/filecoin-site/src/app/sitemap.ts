import { generateSitemap } from '@filecoin-foundation/utils/generateSitemap'

import { BASE_URL } from '@/constants/siteMetadata'

export default function sitemap() {
  return generateSitemap({
    paths: [
      '/',
      '/blog',
      '/build-on-filecoin',
      '/case-studies',
      '/community-hub',
      '/learn',
      '/store-data',
      '/privacy-policy',
      '/provide-storage',
      '/provide-storage/onboarding',
      '/terms-of-use',
    ],
    baseUrl: BASE_URL,
  })
}
