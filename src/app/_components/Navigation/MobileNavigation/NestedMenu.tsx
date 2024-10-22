import type { Dispatch, SetStateAction } from 'react'

import { type LinkItemProps, LinkItem } from './LinkItem'

type NestedMenuItemProps = {
  path: LinkItemProps['path']
  label: LinkItemProps['label']
}

type NestedMenuProps = {
  title: string
  items: Array<NestedMenuItemProps>
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function NestedMenu({ title, items, setOpen }: NestedMenuProps) {
  return (
    <li>
      <span className="mb-4 block text-brand-200">{title}</span>
      <ul className="space-y-6 border-l">
        {items.map((item) => (
          <LinkItem
            key={item.path}
            nested
            label={item.label}
            path={item.path}
            setOpen={setOpen}
          />
        ))}
      </ul>
    </li>
  )
}
