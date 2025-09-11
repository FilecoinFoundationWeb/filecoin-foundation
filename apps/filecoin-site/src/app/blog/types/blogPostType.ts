import { getBlogPostData } from '../utils/getBlogPostData'

import type { Post } from '@/tina/__generated__/types'

export type BlogPost = Awaited<ReturnType<typeof getBlogPostData>>

export type BlogPostTinaCMS = Omit<Post, '_values' | '_sys'> & {
  slug: string
  publishedOn: Date
  shareImage: Post['share_image']
}
