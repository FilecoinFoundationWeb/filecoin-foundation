import { TagGroupContainer } from '@/components/TagComponents/TagGroupContainer'
import { type TagProps, TagLabel } from '@/components/TagLabel'

export type TagGroupProps = {
  labels: TagProps['children'] | [TagProps['children'], TagProps['children']]
}

export function TagGroup({ labels }: TagGroupProps) {
  const normalizedLabels = Array.isArray(labels) ? labels : [labels]

  if (normalizedLabels.length === 1) {
    return <TagLabel>{normalizedLabels[0]}</TagLabel>
  }

  return (
    <TagGroupContainer>
      {normalizedLabels.map((label, index) => (
        <TagLabel key={index} variant={index === 0 ? 'primary' : 'secondary'}>
          {label}
        </TagLabel>
      ))}
    </TagGroupContainer>
  )
}
