import { Link } from '@/i18n/navigation'

import { setUIConfig } from '@filecoin-foundation/ui-filecoin/config/ui-config'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

setUIConfig({
  baseDomain: BASE_DOMAIN,
  Link: Link,
})

export function ConfigInitializer() {
  return null
}
