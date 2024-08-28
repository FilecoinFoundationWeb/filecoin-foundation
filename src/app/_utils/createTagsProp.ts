import type { TagProps } from '@/components/TagLabel'

export function createTagsProp({
  label,
  borderColor,
}: {
  label: TagProps['children']
  borderColor?: TagProps['borderColor']
}): TagProps[] {
  return [{ children: label, borderColor }]
}
