import { TagLabel } from './TagLabel'

export type TagGroupProps = {
  tags: string[]
}

export function TagGroup({ tags }: TagGroupProps) {
  if (tags.length === 1) {
    return <TagLabel>{tags[0]}</TagLabel>
  }

  return (
    <span className="flex gap-4">
      {tags.map((tag, index) => (
        <TagLabel key={index}>{tag}</TagLabel>
      ))}
    </span>
  )
}
