import { BlogPostData } from '@/types/blogPostTypes'

import { mapMarkdownToBlogPostData } from '@/utils/mapMarkdownToBlogPostData'
import { transformMarkdownToCollectionData } from '@/utils/transformMarkdownToCollectionData'
import { transformMarkdownToItemData } from '@/utils/transformMarkdownToItemData'

import { PATHS } from '@/constants/paths'

const BLOG_COLLECTION_NAME = 'blog'
const BLOG_DIRECTORY_PATH = PATHS.BLOG.entriesContentPath as string

export function getBlogPostData(slug: string): BlogPostData {
  return transformMarkdownToItemData<BlogPostData>(
    BLOG_DIRECTORY_PATH,
    BLOG_COLLECTION_NAME,
    slug,
    mapMarkdownToBlogPostData
  )
}

export function getBlogPostsData(): BlogPostData[] {
  return transformMarkdownToCollectionData<BlogPostData>(
    BLOG_DIRECTORY_PATH,
    BLOG_COLLECTION_NAME,
    mapMarkdownToBlogPostData
  )
}
