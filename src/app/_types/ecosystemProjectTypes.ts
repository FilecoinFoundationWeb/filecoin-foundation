import { Metadata } from '@/types/metadataTypes'

type Tag = {
  label: string
  value: string
}

type Topic = {
  label: string
  value: string
}

export type EcosystemProjectData = {
  title: string
  'created-on'?: string
  'updated-on'?: string
  'published-on'?: string
  body?: string
  f_featured?: boolean
  f_brand: {
    url: string
    alt: string
  }
  f_topic: Topic
  f_tag: Tag[]
  'f_card-text-truncated': string
  f_website: string
  f_repo?: string
  'f_tech-3': string[]
  'f_case-study'?: string
  'f_social-media'?: string
  f_video?: {
    url?: string
  }
  'f_year-2'?: string
  'f_last_updated-2'?: string
  'f_what-s-new'?: string
  'f_background-color'?: string
  slug: string
  date: string
  metadata?: Metadata
}
