import { getBlogPostData } from '../utils/getBlogPostData'

export type BlogPost = Awaited<ReturnType<typeof getBlogPostData>>

export type BlogPostPreview = Omit<BlogPost, 'content'>
