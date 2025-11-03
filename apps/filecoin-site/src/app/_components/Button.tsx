import {
  Button as SharedButton,
  type ButtonProps as SharedButtonProps,
} from '@filecoin-foundation/ui-filecoin/Button'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { InternalLink } from '@/components/InternalLink'

export type ButtonProps = Omit<
  SharedButtonProps,
  'baseDomain' | 'LinkComponent'
>

export function Button({ children, ...props }: ButtonProps) {
  return (
    <SharedButton
      baseDomain={BASE_DOMAIN}
      LinkComponent={InternalLink}
      {...props}
    >
      {children}
    </SharedButton>
  )
}
