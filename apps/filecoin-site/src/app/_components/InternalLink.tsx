// src/components/InternalLink.tsx
import { Link as NextIntlLink } from '@/i18n/navigation'

import type { BaseLinkProps } from '@filecoin-foundation/ui-filecoin/BaseLink'

export function InternalLink({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  baseDomain: _baseDomain,
  ...props
}: Omit<BaseLinkProps, 'InternalLinkComponent'>) {
  return <NextIntlLink {...props} />
}
