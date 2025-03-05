import type { MetadataParams } from '@/utils/createMetadata'

export type structuredDataParams = Pick<
  MetadataParams,
  'metaTitle' | 'metaDescription'
>
