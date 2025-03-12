import type { CMSConfig } from '@filecoin-foundation/utils/types/cmsConfig'

export type FFCMSCollectionName =
  | 'blog_posts'
  | 'ecosystem_projects'
  | 'event_entries'
  | 'digest_articles'

export type FFCMSConfig = CMSConfig<FFCMSCollectionName>
