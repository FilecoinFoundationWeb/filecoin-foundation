import { BlogPostData } from '@/types/blogPostTypes'

export function mapMarkdownToBlogPostData({
  data,
  content,
}: {
  data: any
  content?: string
}): BlogPostData {
  return {
    slug: data.slug,
    title: data.title,
    createdOn: data['created-on'],
    updatedOn: data['updated-on'],
    publishedOn: data['published-on'],
    featured: data.featured,
    description: data.description,
    image: {
      url: data.image?.url || '',
      alt: data.image?.alt || '',
    },
    content,
    recommendedPosts: data.recommendedPosts || [],
    metadata: data.metadata,
  }
}
