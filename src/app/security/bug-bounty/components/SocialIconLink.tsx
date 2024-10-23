import type { CellContext } from '@tanstack/react-table'

import { CustomLink } from '@/components/CustomLink'
import { Icon } from '@/components/Icon'

import type { WhiteHat } from '../types'
import { getLogoFromLink } from '../utils/getLogoFromLink'

type ProfileLinkValueType = string | null
type SocialIconLinkProps = CellContext<WhiteHat, ProfileLinkValueType>

export function SocialIconLink({ getValue, row }: SocialIconLinkProps) {
  const profileLink = getValue()
  const reporter = row.original.reporter

  if (!profileLink) {
    return null
  }

  const logo = getLogoFromLink(profileLink)

  return (
    <CustomLink
      href={profileLink}
      className="inline-flex size-12 items-center justify-center focus:brand-outline"
      aria-label={`Visit ${reporter}'s profile`}
    >
      <Icon component={logo} size={20} />
    </CustomLink>
  )
}
