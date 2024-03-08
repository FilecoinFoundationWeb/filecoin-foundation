import { CMSFieldConfig } from '@/types/cmsConfig'

export function validateFrontMatter(
  data: any,
  fields: CMSFieldConfig[]
): boolean {
  const missingFieldsToSkipCheck: string[] = ['content', 'seo']
  const extraFieldsToSkipCheck: string[] = ['slug', 'metadata']

  const missingFields: string[] = fields
    .filter(
      (field) =>
        !missingFieldsToSkipCheck.includes(field.name) &&
        data[field.name] === undefined
    )
    .map((field) => field.name)

  const extraFields: string[] = Object.keys(data).filter(
    (key) =>
      !extraFieldsToSkipCheck.includes(key) &&
      !fields.some((field) => field.name === key)
  )

  if (missingFields.length > 0) {
    console.error(
      `🔥🔥 Missing or incorrect fields in front matter: ${missingFields.join(
        ', '
      )}`
    )

    return false
  }

  if (extraFields.length > 0) {
    console.error(
      `🔥🔥 Extra fields found in front matter: ${extraFields.join(', ')}`
    )

    return false
  }

  return true
}
