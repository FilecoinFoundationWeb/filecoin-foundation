import { PATHS } from '@/constants/paths'

import { convertMarkdownToBlogPostData } from '@/utils/covertMarkdowntoBlogPostData'
import { getData, getAllData } from '@/utils/getData'

const BLOG_DIRECTORY_PATH = PATHS.BLOG.entriesContentPath as string

export function getBlogPostData(slug: string) {
  return getData(BLOG_DIRECTORY_PATH, convertMarkdownToBlogPostData, slug)
}

export function getBlogPostsData() {
  return getAllData(BLOG_DIRECTORY_PATH, convertMarkdownToBlogPostData)
}
