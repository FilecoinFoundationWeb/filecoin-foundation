import type { TagProps } from '@/components/TagLabel'

export function createTagsProp({
  label,
  borderColor,
}: {
  label: TagProps['children']
  borderColor?: TagProps['borderColor']
}): Array<TagProps> {
  return [{ children: label, borderColor }]
}
