import { PATHS } from '@/constants/paths'

import { generateDynamicPaths } from '@/support/generateDynamicPathsUtil'
import { getRandomSlug } from '@/support/getRandomSlugUtil'
import { verifyMetadataForDynamicPages } from '@/support/verifyMetadataForDynamicPagesUtil'

describe('Random Blog Post', () => {
  it('should check metadata', () => {
    const BLOG_BASE_PATHS = PATHS.BLOG

    getRandomSlug(BLOG_BASE_PATHS.entriesContentPath as string).then((slug) => {
      const { contentFilePath, pageUrl } = generateDynamicPaths(
        BLOG_BASE_PATHS,
        slug,
      )

      verifyMetadataForDynamicPages({
        contentFilePath,
        urlPath: pageUrl,
      })
    })
  })
})
