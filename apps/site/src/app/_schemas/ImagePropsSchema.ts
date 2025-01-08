import { z } from 'zod'

import { injectFallbackIfLocalImageIsInvalid } from '@/utils/zodTransformUtils'

const LOCAL_ASSETS_FOLDER_PATH = '/assets'

export const ImagePropsSchema = z
  .object({
    src: z.string(),
    alt: z.string().optional(),
  })
  .strict()
  .refine(
    (data) => data.src.startsWith(LOCAL_ASSETS_FOLDER_PATH),
    'Image is not a local asset',
  )
  .transform(injectFallbackIfLocalImageIsInvalid)
