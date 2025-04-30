import type { AuthorExtended } from '@filecoin-foundation/utils/types/authorTypes'

import { Avatar } from './Avatar'


type AuthorWithCompany = Omit<AuthorExtended, 'bio'>

export type AvatarGroupExpandedProps = {
  authors: Array<AuthorWithCompany>
}

export function AvatarGroupExpanded({ authors }: AvatarGroupExpandedProps) {
  return (
    <div className="flex flex-col flex-wrap gap-6 sm:flex-row sm:items-center sm:gap-10">
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
            <span className="avatar-group-expanded-full-name font-medium">{`${firstName} ${lastName}`}</span>
            <span className="text-sm">{company}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
