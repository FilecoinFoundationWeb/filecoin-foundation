import clsx from 'clsx'

import { formatDate } from '@filecoin-foundation/utils/dateUtils'

import type { BlogPost } from '../types/blogPostType'

type PostMetadataProps = {
  author?: BlogPost['author']
  date: BlogPost['date']
}

export function PostMetadata({ author, date }: PostMetadataProps) {
  const formattedDate = formatDate(date, 'MMM d, yyyy')

  const commonClasses = 'font-mono text-sm text-zinc-600'

  if (author) {
    return (
      <div className={clsx('flex items-center gap-2', commonClasses)}>
        <span>{author}</span>
        <span className="text-zinc-400">|</span>
        <span>{formattedDate}</span>
      </div>
    )
  }

  return <span className={commonClasses}>{formattedDate}</span>
}
