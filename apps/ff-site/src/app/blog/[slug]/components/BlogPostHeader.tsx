import { graphicsData } from '@/data/graphicsData'

import { getCategoryLabel } from '@/utils/categoryUtils'
import { formatDate } from '@/utils/dateUtils'

import { ArticleHeader } from '@/components/ArticleHeader'
import { TagLabel } from '@/components/TagComponents/TagLabel'

import type { BlogPost } from '../../types/blogPostType'

type BlogPostHeaderProps = Pick<
  BlogPost,
  'title' | 'publishedOn' | 'image' | 'category'
>

export function BlogPostHeader({
  title,
  publishedOn,
  image,
  category,
}: BlogPostHeaderProps) {
  return (
    <ArticleHeader
      image={{
        src: image?.src || graphicsData.imageFallback.data.src,
        alt: '',
      }}
    >
      <TagLabel>
        {getCategoryLabel({ collectionName: 'blog_posts', category })}
      </TagLabel>

      <ArticleHeader.Title>{title}</ArticleHeader.Title>

      <span className="inline-block text-blue-300">
        {formatDate(publishedOn)}
      </span>
    </ArticleHeader>
  )
}
