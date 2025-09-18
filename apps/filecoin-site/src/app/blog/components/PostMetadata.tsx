import clsx from 'clsx'

import { formatDate } from '@filecoin-foundation/utils/dateUtils'

import type { BlogPostTinaCMS } from '../types/blogPostType'

type PostMetadataProps = {
  author?: BlogPostTinaCMS['author']
  date: BlogPostTinaCMS['publishedOn']
}

export function PostMetadata({ author, date }: PostMetadataProps) {
  const formattedDate = formatDate(date)

  const baseStyles = 'font-mono text-sm text-[var(--color-paragraph-text)]'

  if (author) {
    return (
      <div className={clsx('flex items-center gap-2', baseStyles)}>
        <span>{formattedDate}</span>
        <span>|</span>
        <span>{author}</span>
      </div>
    )
  }

  return <span className={baseStyles}>{formattedDate}</span>
}
