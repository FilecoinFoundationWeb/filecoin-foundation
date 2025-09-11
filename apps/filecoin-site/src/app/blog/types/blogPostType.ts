import { getBlogPostData } from '../utils/getBlogPostData'

import type { Post } from '@/tina/__generated__/types'

export type BlogPost = Awaited<ReturnType<typeof getBlogPostData>>

export type BlogPostTinaCMS = Post & {
  slug: string
  seo: {
    title: string
    description: string
  }
}
