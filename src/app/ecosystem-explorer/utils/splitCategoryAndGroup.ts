import { allowedCategoryGroups } from '../constants/allowedCategoryGroup'

const SEPARATOR = ' - '

export function splitCategoryAndGroup(label: string) {
  if (!label.includes(SEPARATOR)) {
    throw new Error(`Category label does not contain "${SEPARATOR}"`)
  }

  const [group, category] = label.split(SEPARATOR)

  if (!category) {
    throw new Error(`"${category}" is not a valid category name`)
  }

  if (!allowedCategoryGroups.includes(group)) {
    throw new Error(`"${group}" is not a valid category group`)
  }

  return { group, category }
}
