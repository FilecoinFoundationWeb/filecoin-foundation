import slugify from 'slugify'
import { z } from 'zod'

import { MaturityModelContentSchema } from '../schema/MaturityModelContentSchema'

export function validateAndSortContent(content: Array<unknown>) {
  const parsedContentData = z.array(MaturityModelContentSchema).parse(content)

  return parsedContentData
    .sort((a, b) => a.order - b.order)
    .map((item) => ({
      ...item,
      slug: slugify(item.title, { lower: true, strict: true, trim: true }),
    }))
}
