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
    return <TagLabel borderColor="brand-100">{labelsArray[0]}</TagLabel>
  }

  return (
    <span className="flex gap-2">
      {labelsArray.map((label, index) => (
        <TagLabel
          key={label}
          borderColor={index === 0 ? 'brand-100' : 'brand-500'}
        >
          {label}
        </TagLabel>
      ))}
    </span>
  )
}
