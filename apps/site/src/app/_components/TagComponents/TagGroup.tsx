import { type TagProps, TagLabel } from './TagLabel'

type TagItem = {
  text: TagProps['children'],
  icon?: TagProps['icon'],
  variant?: TagProps['variant']
}

export type TagGroupProps = {
  tags: [TagItem] | [TagItem, TagItem]
}

export function TagGroup({ tags }: TagGroupProps) {
  if (tags.length === 1) {
    const { text, icon } = tags[0]
    return <TagLabel icon={icon}>{text}</TagLabel>
  }

  return (
    <span className="flex gap-2">
      {tags.map(({ variant, text, icon }, index) => (
        <TagLabel
          key={index}
          icon={icon}
          variant={
            index === 0 ? 'primary' : (variant ?? 'secondary')
          }
        >
          {text}
        </TagLabel>
      ))}
    </span>
  )
}
