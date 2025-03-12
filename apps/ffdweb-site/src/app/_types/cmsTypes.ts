import type { CMSConfig } from '@filecoin-foundation/utils/types/cmsConfig'

export type FFDWebCMSCollectionName =
  | 'blog_posts'
  | 'digest_articles'
  | 'learning_resources'
  | 'projects'

export type FFDWebCMSConfig = CMSConfig<FFDWebCMSCollectionName>
