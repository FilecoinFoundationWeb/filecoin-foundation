import { type TagProps, TagLabel } from './TagLabel'

type TagItem = {
  text: TagProps['children']
}

export type TagGroupProps = {
  tags: [TagItem] | [TagItem, TagItem]
}

export function TagGroup({ tags }: TagGroupProps) {
  if (tags.length === 1) {
    const { text } = tags[0]
    return <TagLabel>{text}</TagLabel>
  }

  return (
    <span className="flex gap-2">
      {tags.map(({ text }, index) => (
        <TagLabel key={index}>{text}</TagLabel>
      ))}
    </span>
  )
}
