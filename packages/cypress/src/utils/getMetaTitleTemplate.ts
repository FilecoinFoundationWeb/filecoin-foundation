import type { RootMetadata } from '@filecoin-foundation/utils/types/rootMetadataType'

type GetMetaTitleTemplateProps = {
  title: string
  rootMetadata: RootMetadata
}

export function getMetaTitleTemplate({
  title,
  rootMetadata,
}: GetMetaTitleTemplateProps) {
  return rootMetadata.title.template.replace('%s', title)
}
