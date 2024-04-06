import { Metadata } from '@/types/metadataTypes'

export type PageAttributes = {
  header: {
    title: string
    description: string
  }
  featured_post?: string
} & Metadata
