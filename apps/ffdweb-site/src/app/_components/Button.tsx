import {
  Button as SharedButton,
  type ButtonProps as SharedButtonProps,
} from '@filecoin-foundation/ui/Button'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

const variantClasses = {
  primary: 'button--primary',
  ghost: 'button--ghost',
} as const

type ButtonProps = Omit<
  SharedButtonProps<typeof variantClasses>,
  'baseDomain' | 'variants'
> & {
  variant?: keyof typeof variantClasses
}

export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <SharedButton
      variants={{ options: variantClasses, selected: variant }}
      baseDomain={BASE_DOMAIN}
      {...props}
    >
      {children}
    </SharedButton>
  )
}
