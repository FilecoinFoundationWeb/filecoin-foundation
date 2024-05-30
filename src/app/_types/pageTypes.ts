import { Metadata } from '@/types/metadataTypes'

export type PageAttributes = {
  header: {
    title: string
    description: string | string[]
  }
  featured_entry?: string
  featured_ecosystem_projects?: string[]
  grant_graduates?: string[]
} & Metadata
