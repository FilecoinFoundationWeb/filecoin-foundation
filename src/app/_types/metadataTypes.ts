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
<<<<<<< HEAD
  og?: OpenGraphMetadata
  twitter?: TwitterMetadata
}
=======
}

export type Metadata = {
  og: OpenGraphMetadata
  twitter: TwitterMetadata
} & SeoMetadata
>>>>>>> 45074ec (CR)
