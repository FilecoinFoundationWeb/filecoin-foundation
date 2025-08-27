import {
  MarkdownLink as SharedMarkdownLink,
  type MarkdownLinkProps,
} from '@filecoin-foundation/ui/Markdown'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

export function MarkdownLink(props: Omit<MarkdownLinkProps, 'baseDomain'>) {
  return <SharedMarkdownLink {...props} baseDomain={BASE_DOMAIN} />
}
