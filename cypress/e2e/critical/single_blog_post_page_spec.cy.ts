import { PATHS } from '@/constants/paths'

import { getRandomSlug } from '@/support/getRandomSlugUtil'
import { verifyMetadata } from '@/support/verifyMetadataUtil'

describe('Random Blog Post', () => {
  it('should check metadata', () => {
    const blogDirectoryPath = PATHS.BLOG.entriesContentPath as string

    getRandomSlug(blogDirectoryPath).then((slug) => {
      verifyMetadata(blogDirectoryPath, `${PATHS.BLOG.path}/${slug}`, slug)
    })
  })
})
