import { CustomLink } from '@/components/CustomLink'
import { Icon, type IconProps } from '@/components/Icon'

import type { WhiteHat } from '../types'

type SocialIconLinkProps = {
  profileLink: NonNullable<WhiteHat['profileLink']>
  reporter: WhiteHat['reporter']
  logo: IconProps['component']
}

export function SocialIconLink({
  profileLink,
  reporter,
  logo,
}: SocialIconLinkProps) {
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
