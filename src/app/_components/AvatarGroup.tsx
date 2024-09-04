import React from 'react'

import { type DigestArticleData } from '@/types/digestTypes'

import { formatAuthors } from '@/utils/formatAuthors'

import { Avatar } from '@/components/Avatar'

export type AvatarGroupProps = {
  authors: DigestArticleData['authors']
}

export function AvatarGroup({ authors }: AvatarGroupProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-1">
        {authors.map((author) => (
          <React.Fragment key={`${author.firstName}-${author.lastName}`}>
            <Avatar author={author} />
          </React.Fragment>
        ))}
      </div>
      <span className="text-sm">{formatAuthors(authors)}</span>
    </div>
  )
}
