import { Metadata } from '@/types/metadataTypes'

type Tag = {
  label: string
  value: string
}

type Topic = {
  label: string
  value: string
}

export type LinkDataKey = 'website' | 'repo' | 'twitter' | 'caseStudy'

export type EcosystemProjectData = {
  title: string
  slug: string
  createdOn?: string
  updatedOn?: string
  publishedOn?: string
  featured?: boolean
  description: string
  topic: Topic
  tags: Tag[]
  tech: string[]
  image: {
    url: string
    alt: string
  }
  website: string
  content?: string
  caseStudy?: string
  repo?: string
  twitter?: string
  videoUrl?: string
  yearJoined?: string
  newsUpdate?: string
  metadata?: Metadata
}
