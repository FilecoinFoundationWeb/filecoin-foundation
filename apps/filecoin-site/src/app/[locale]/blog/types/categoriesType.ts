import { z } from 'zod'

import { AllowedCategoriesSchema } from '../schemas/BlogPostFrontmatterSchema'

export type AllowedCategory = z.infer<typeof AllowedCategoriesSchema>
