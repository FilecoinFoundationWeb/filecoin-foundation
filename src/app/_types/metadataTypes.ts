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

type SeoMetadata = {
  title: string
  description: string
}

export type Metadata = {
  seo: SeoMetadata
  og: OpenGraphMetadata
  twitter: TwitterMetadata
}
