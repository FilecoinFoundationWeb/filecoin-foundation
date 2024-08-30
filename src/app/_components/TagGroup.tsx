import { type TagProps, TagLabel } from '@/components/TagLabel'

export type TagGroupProps = {
  label: TagProps['children'] | Array<TagProps['children']>
}

export function TagGroup({ label }: TagGroupProps) {
  const labelsArray = Array.isArray(label) ? label : [label]

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
