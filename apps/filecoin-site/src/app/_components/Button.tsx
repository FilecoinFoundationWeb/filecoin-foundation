import { Button as SharedButton } from '@filecoin-foundation/ui/Button'
import { type LocalButtonProps } from '@filecoin-foundation/utils/types/buttonTypes'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { Link } from '@/i18n/navigation'

const variantClasses = {
  primary: 'button--primary',
  ghost: 'button--ghost',
  tertiary: 'button--tertiary',
} as const

export type ButtonProps = LocalButtonProps<typeof variantClasses>

export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <SharedButton
      variants={{ options: variantClasses, selected: variant }}
      baseDomain={BASE_DOMAIN}
      LinkComponent={Link}
      {...props}
    >
      {children}
    </SharedButton>
  )
}
