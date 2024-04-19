import { Metadata } from '@/types/metadataTypes'

export type GrantGraduatesData = {
  title: string
  slug: string
  createdOn?: string
  updatedOn?: string
  publishedOn?: string
  featured: boolean
  description: string
  topic: string
  tags: string[]
  tech: string[]
  image?: {
    url: string
    alt: string
  }
  website: string
  featuredContent: string
  repo?: string
  twitter?: string
  videoUrl?: string
  yearJoined?: string
  newsUpdate?: string
  metadata?: Metadata
}
