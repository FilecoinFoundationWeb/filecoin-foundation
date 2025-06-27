import { generateSitemap } from '@filecoin-foundation/utils/generateSitemap'

import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

export default function sitemap() {
  return generateSitemap({
    paths: PATHS,
    baseUrl: BASE_URL,
  })
}
