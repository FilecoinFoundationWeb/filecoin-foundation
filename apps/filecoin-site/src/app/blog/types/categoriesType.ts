import { z } from 'zod'

import { AllowedCategories } from '../schemas/BlogPostFrontmatterSchema'

export type AllowedCategory = z.infer<typeof AllowedCategories>
