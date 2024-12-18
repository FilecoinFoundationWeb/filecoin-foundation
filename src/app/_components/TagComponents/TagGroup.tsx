import { TagGroupContainer } from './TagGroupContainer'
import { type TagProps, TagLabel } from './TagLabel'

type TagItem = {
  text: TagProps['children']
  icon?: TagProps['icon']
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
    <TagGroupContainer>
      {tags.map(({ icon, text }, index) => (
        <TagLabel
          key={index}
          variant={index === 0 ? 'primary' : 'secondary'}
          icon={icon}
        >
          {text}
        </TagLabel>
      ))}
    </TagGroupContainer>
  )
}
