import {
  Button as SharedButton,
  type ButtonProps as SharedButtonProps,
} from '@filecoin-foundation/ui/Button'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

const variantClasses = {
  primary: 'button--primary',
  primaryDark: 'button--primary button--primary--dark',
  ghost: 'button--ghost',
  ghostDark: 'button--ghost button--ghost--dark',
} as const

type ButtonProps = Omit<
  SharedButtonProps<typeof variantClasses>,
  'baseDomain' | 'variants'
>

export function Button({ children, ...props }: ButtonProps) {
  return (
    <SharedButton variants={variantClasses} baseDomain={BASE_DOMAIN} {...props}>
      {children}
    </SharedButton>
  )
}
