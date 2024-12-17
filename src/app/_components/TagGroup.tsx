import { TagGroupContainer } from '@/components/TagComponents/TagGroupContainer'
import { type TagProps, TagLabel } from '@/components/TagLabel'

export type TagGroupProps = {
  label: TagProps['children'] | Array<TagProps['children'] | undefined>
}

export function TagGroup({ label }: TagGroupProps) {
  const labelsArray = (Array.isArray(label) ? label : [label]).filter(
    (label) => label !== undefined,
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
