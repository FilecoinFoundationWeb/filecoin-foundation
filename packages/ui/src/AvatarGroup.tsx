import { Avatar } from './Avatar'

import {
  type Author,
  type AuthorExtended,
} from '@filecoin-foundation/utils/types/authorTypes'

export type AvatarGroupProps = {
  authors: Array<Author>
}

export function AvatarGroup({ authors }: AvatarGroupProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex shrink-0 -space-x-1">
        {authors.map(({ firstName, lastName, image }) => (
          <Avatar
            key={`${firstName}-${lastName}`}
            firstName={firstName}
            lastName={lastName}
            image={image}
          />
        ))}
      </div>
      <span className="avatar-full-name text-sm">{formatAuthors(authors)}</span>
    </div>
  )
}

type AuthorWithCompany = Omit<AuthorExtended, 'bio'>

export type AvatarGroupExpandedProps = {
  authors: Array<AuthorWithCompany>
}

export function AvatarGroupExpanded({ authors }: AvatarGroupExpandedProps) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
      {authors.map(({ firstName, lastName, image, company }) => (
        <div
          className="flex items-center gap-3"
          key={`${firstName}-${lastName}`}
        >
          <Avatar
            firstName={firstName}
            lastName={lastName}
            image={image}
            size="large"
          />
          <div className="flex flex-col gap-0.5">
            <span className="avatar-group-expanded-full-name">{`${firstName} ${lastName}`}</span>
            <span className="avatar-group-expanded-company">{company}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function formatAuthors(authors: Array<Author>) {
  return authors
    .map((author, index) => {
      const isLastAuthor = index === authors.length - 1
      const isSecondToLastAuthor = index === authors.length - 2

      let separator = ''
      if (isSecondToLastAuthor && authors.length > 1) {
        separator = ' & '
      } else if (!isLastAuthor) {
        separator = ', '
      }

      return `${author.firstName.trim()} ${author.lastName.trim()}${separator}`
    })
    .join('')
    .trim()
}
