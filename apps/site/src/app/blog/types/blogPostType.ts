import { getBlogPostData } from '../utils/getBlogPostData'

export type BlogPost = Awaited<ReturnType<typeof getBlogPostData>>
