import React from 'react'

import { formatAuthors } from '@/utils/formatAuthors'

import { Avatar } from '@/components/Avatar'

import type { DigestArticleData } from '@/digest/types/digestTypes'

export type AvatarGroupProps = {
  authors: DigestArticleData['authors']
}

export function AvatarGroup({ authors }: AvatarGroupProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-1">
        {authors.map((author, index) => (
          <Avatar key={index} author={author} />
        ))}
      </div>
      <span className="text-sm">{formatAuthors(authors)}</span>
    </div>
  )
}
