import { type AvatarProps } from '@filecoin-foundation/ui/Avatar'

export type AuthorWithCompany = AvatarProps & {
  company: string
}

export type AvatarGroupProps = {
  authors: Array<AuthorWithCompany>
}
