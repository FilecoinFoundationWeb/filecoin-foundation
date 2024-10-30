import { PATHS } from '@/constants/paths'

import { getRandomSlug } from '@/support/getRandomSlugUtil'
import { verifyMetadataForDynamicPages } from '@/support/verifyMetadataForDynamicPagesUtil'

describe('Random Blog Post', () => {
  it('should check metadata', () => {
    const blogDirectoryPath = PATHS.BLOG.entriesContentPath as string

    getRandomSlug(blogDirectoryPath).then((slug) => {
      const fullPath = `${blogDirectoryPath}/${slug}.md`
      const pagePath = `${PATHS.BLOG.path}/${slug}`

      verifyMetadataForDynamicPages({
        fullPath,
        pagePath,
      })
    })
  })
})
