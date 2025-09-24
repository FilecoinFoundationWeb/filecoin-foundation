import { TinaMarkdownContent } from 'tinacms/dist/rich-text'

import type { AllowedCategory } from '../schemas/BlogPostFrontmatterSchema'

export type BlogPost = {
  title: string
  excerpt: string
  publishedOn: Date
  slug: string
  categories: AllowedCategory[]
  author?: string
  image?: { url: string; alt?: string }
  shareImage?: string
  seo?: { title?: string; description?: string }
  content: string | TinaMarkdownContent
}
