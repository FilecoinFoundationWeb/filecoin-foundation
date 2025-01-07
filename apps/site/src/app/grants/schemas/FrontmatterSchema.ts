import { BaseFrontmatterSchema } from '@/schemas/FrontmatterSchema'

import { createFeaturedProjectsZodField } from '@/ecosystem-explorer/utils/createFeaturedProjectsZodField'

export const FrontmatterSchema = BaseFrontmatterSchema.extend({
  featured_grant_graduates: createFeaturedProjectsZodField(
    'No matching grant graduates found',
  ),
})
