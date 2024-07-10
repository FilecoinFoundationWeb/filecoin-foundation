import { PATHS } from '../../src/app/_constants/paths'
import { getRandomSlug } from '../support/getRandomSlugUtil'
import { verifyMetadata } from '../support/verifyMetadataUtil'

describe('Random Blog Post Page', function () {
  it('should check metadata of a random blog post', function () {
    const blogDirectoryPath = PATHS.BLOG.entriesContentPath as string

    getRandomSlug(blogDirectoryPath).then((slug) => {
      verifyMetadata(blogDirectoryPath, `${PATHS.BLOG.path}/${slug}`, slug)
    })
  })
})
