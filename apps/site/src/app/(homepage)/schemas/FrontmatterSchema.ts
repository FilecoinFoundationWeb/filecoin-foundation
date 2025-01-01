import { BaseFrontmatterSchema } from '@/schemas/FrontmatterSchema'

import { createFeaturedProjectsZodField } from '@/ecosystem-explorer/utils/createFeaturedProjectsZodField'

export const FrontmatterSchema = BaseFrontmatterSchema.extend({
  featured_ecosystem_projects: createFeaturedProjectsZodField(
    'No matching ecosystem projects found',
  ),
})
