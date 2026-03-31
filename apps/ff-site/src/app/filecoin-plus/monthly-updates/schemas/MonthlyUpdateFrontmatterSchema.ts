import { z } from 'zod'

import { DynamicBaseDataSchema } from '@filecoin-foundation/utils/schemas/DynamicDataBaseSchema'

const MonthlyUpdateFields = {
  title: z.string(),
  description: z.string(),
  content: z.string(),
  'add-table-of-contents': z.boolean().optional(),
}

export const MonthlyUpdateFrontmatterSchema = z.strictObject({
  ...DynamicBaseDataSchema.shape,
  ...MonthlyUpdateFields,
})
