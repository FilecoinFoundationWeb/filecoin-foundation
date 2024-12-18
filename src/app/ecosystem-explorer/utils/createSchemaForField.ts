import { createEnumSchema } from '@/utils/zodUtils'

import { getCMSOptionsForField } from './getCMSOptionsForField'

type FieldName = Parameters<typeof getCMSOptionsForField>[0]

export function createSchemaForField(fieldName: FieldName) {
  const cmsOptions = getCMSOptionsForField(fieldName)
  const values = cmsOptions.map((option) => option.value)
  return createEnumSchema(values)
}
