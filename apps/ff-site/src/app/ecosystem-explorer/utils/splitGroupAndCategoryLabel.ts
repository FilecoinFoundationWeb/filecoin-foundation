import { allowedCategoryGroups } from '../constants/allowedCategoryGroup'

const SEPARATOR = ' - '

export function splitGroupAndCategoryLabel(groupAndCategoryLabel: string) {
  if (!groupAndCategoryLabel.includes(SEPARATOR)) {
    throw new Error(`Group and category label does not contain "${SEPARATOR}"`)
  }

  const [groupLabel, categoryLabel] = groupAndCategoryLabel.split(SEPARATOR)

  if (!categoryLabel) {
    throw new Error(`Category label is missing from "${groupAndCategoryLabel}"`)
  }

  if (!allowedCategoryGroups.includes(groupLabel)) {
    throw new Error(`"${groupLabel}" is not a valid category group`)
  }

  return { groupLabel, categoryLabel }
}
