import type { Infer } from '@qino/cms'
import removeMarkdown from 'remove-markdown'

import { buildArticlePath } from '@filecoin-foundation/utils/buildDigestPath'
import { camelcaseKeysDeep } from '@filecoin-foundation/utils/camelcaseKeysDeep'
import { DigestArticleFrontmatterSchema } from '@filecoin-foundation/utils/schemas/DigestArticleFrontmatterSchema'
import { withSeoTitleFallback } from '@filecoin-foundation/utils/withSeoTitleFallback'

import qino from '../'

export const digestArticleCollection = qino.defineCollection({
  directory: 'digest/articles',
  extension: '.md',
  schema: DigestArticleFrontmatterSchema.transform(camelcaseKeysDeep).transform(
    (article) => withSeoTitleFallback(article),
  ),
  views: (view) => ({
    default: view({
      augment: (article) => ({
        description: removeMarkdown(article.markdown),
        articlePath: buildArticlePath({
          issueNumber: article.issueNumber,
          articleSlug: article._meta.slug,
        }),
      }),
      sort: (a, b) => a.articleNumber - b.articleNumber,
    }),
  }),
})

export type DigestArticleEntry = Infer<typeof digestArticleCollection>['output']
