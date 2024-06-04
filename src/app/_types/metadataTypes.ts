type OpenGraphMetadata = {
  title?: string
  image?: string
}

type TwitterMetadata = {
  title?: string
  card?: string
  site?: string
  creator?: string
}

export type SeoMetadata = {
  title: string
  description: string
  og?: OpenGraphMetadata
  twitter?: TwitterMetadata
}
