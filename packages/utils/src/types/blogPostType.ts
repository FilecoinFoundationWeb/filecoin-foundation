import { getBlogPostData } from '../getBlogPostData'

export type BlogPost = Awaited<ReturnType<typeof getBlogPostData>>
