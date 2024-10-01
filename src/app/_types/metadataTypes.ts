type OpenGraphMetadata = {
  title?: string
  image?: string
}

type TwitterMetadata = {
  card?: 'summary' | 'summary_large_image' | 'player'
  site?: string
  creator?: string
}

export type SeoMetadata = {
  title: string
  description: string
  image?: string
  og?: OpenGraphMetadata
  twitter?: TwitterMetadata
}
