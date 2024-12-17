import { TagGroupContainer } from '@/components/TagComponents/TagGroupContainer'
import { type TagProps, TagLabel } from '@/components/TagLabel'

export type TagGroupProps = {
  labels: TagProps['children'] | Array<TagProps['children']>
}

export function TagGroup({ labels }: TagGroupProps) {
  const labelsArray = (Array.isArray(labels) ? labels : [labels]).filter(
    Boolean,
  )

  if (labelsArray.length === 0) {
    throw new Error('At least one label must be provided.')
  }

  if (labelsArray.length === 1) {
    return <TagLabel>{labelsArray[0]}</TagLabel>
  }

  return (
    <TagGroupContainer>
      {labelsArray.map((label, index) => (
        <TagLabel key={label} variant={index === 0 ? 'primary' : 'secondary'}>
          {label}
        </TagLabel>
      ))}
    </TagGroupContainer>
  )
}
