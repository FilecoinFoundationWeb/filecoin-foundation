import { Avatar } from './Avatar'
import { type AuthorWithCompany } from '@filecoin-foundation/utils/types/authorWithCompanyType'
import { formatAuthors } from '@filecoin-foundation/utils/formatAuthors'

export type AvatarGroupProps = {
  authors: Array<AuthorWithCompany>
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
      <span className="avatar-full-name text-sm">
        {formatAuthors({ authors, showCompany: true })}
      </span>
    </div>
  )
}
