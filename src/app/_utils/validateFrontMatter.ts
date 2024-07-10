import { CMSFieldConfig } from '@/types/cmsConfig'

function validateField(
  data: any,
  field: CMSFieldConfig,
  missingFieldsToSkipCheck: string[],
  missingFields: string[],
) {
  if (field.widget === 'object' && field.fields) {
    field.fields.forEach((nestedField) =>
      validateField(
        data[field.name] || {},
        nestedField,
        missingFieldsToSkipCheck,
        missingFields,
      ),
    )
  } else if (
    !missingFieldsToSkipCheck.includes(field.name) &&
    field.required !== false &&
    data[field.name] === undefined
  ) {
    missingFields.push(field.name)
  }
}

export function validateFrontMatter(
  data: any,
  fields: CMSFieldConfig[],
): boolean {
  const extraFieldsToSkipCheck: string[] = []
  const temporaryMissingFieldsToSkipCheck: string[] = ['location']
  const dynamicMissingFieldsToSkipCheck: string[] = fields
    .filter((field) => field.required === false)
    .map((field) => field.name)

  const missingFieldsToSkipCheck: string[] = [
    ...temporaryMissingFieldsToSkipCheck,
    ...dynamicMissingFieldsToSkipCheck,
  ]

  const missingFields: string[] = []

  fields.forEach((field) => {
    validateField(data, field, missingFieldsToSkipCheck, missingFields)
  })

  const extraFields: string[] = Object.keys(data).filter(
    (key) =>
      !extraFieldsToSkipCheck.includes(key) &&
      !fields.some((field) => field.name === key),
  )

  if (missingFields.length > 0) {
    console.error(
      `🔥🔥 Missing or incorrect fields in front matter: ${missingFields.join(
        ', ',
      )}`,
    )

    return false
  }

  if (extraFields.length > 0) {
    console.error(
      `🔥🔥 Extra fields found in front matter: ${extraFields.join(', ')}`,
    )

    return false
  }

  return true
}
