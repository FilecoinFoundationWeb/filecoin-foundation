import {
  Button as SharedButton,
  type ButtonProps as SharedButtonProps,
} from '@filecoin-foundation/ui/Button'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

type ButtonProps = Omit<SharedButtonProps, 'baseDomain'>

export function Button({ children, ...props }: ButtonProps) {
  return (
    <SharedButton baseDomain={BASE_DOMAIN} {...props}>
      {children}
    </SharedButton>
  )
}
