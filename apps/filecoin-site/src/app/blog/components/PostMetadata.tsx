import clsx from 'clsx'

import { formatDate } from '@filecoin-foundation/utils/dateUtils'

import type { BlogPost } from '../types/blogPostType'

type PostMetadataProps = {
  author?: BlogPost['author']
  date: BlogPost['publishedOn']
}

export function PostMetadata({ author, date }: PostMetadataProps) {
  const formattedDate = formatDate(date)

  const baseStyles = 'font-mono text-sm text-[var(--color-text-paragraph)]'

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
