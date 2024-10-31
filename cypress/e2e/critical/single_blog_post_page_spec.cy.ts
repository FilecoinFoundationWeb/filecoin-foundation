import { PATHS } from '@/constants/paths'

import { getRandomSlug } from '@/support/getRandomSlugUtil'
import { verifyMetadataForDynamicPages } from '@/support/verifyMetadataForDynamicPagesUtil'

describe('Random Blog Post', () => {
  it('should check metadata', () => {
    const BLOG_CONTENT_PATH = PATHS.BLOG.entriesContentPath as string
    const BLOG_BASE_URL = PATHS.BLOG.path

    getRandomSlug(BLOG_CONTENT_PATH).then((slug) => {
      const ENTRY_FILE_PATH = `${BLOG_CONTENT_PATH}/${slug}.md`
      const PAGE_URL = `${BLOG_BASE_URL}/${slug}`

      verifyMetadataForDynamicPages({
        contentFilePath: ENTRY_FILE_PATH,
        urlPath: PAGE_URL,
      })
    })
  })
})
