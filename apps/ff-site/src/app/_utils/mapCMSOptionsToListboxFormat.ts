import type { CMSFieldOption } from '@filecoin-foundation/utils/types/cmsConfig'

export function mapCMSOptionsToListboxFormat<T extends CMSFieldOption>(
  options: Array<T>,
) {
  return options.map((option) => ({
    id: option.value,
    name: option.label,
  }))
}
