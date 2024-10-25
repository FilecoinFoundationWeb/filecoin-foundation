import type { Dispatch, SetStateAction } from 'react'

import { type LinkItemProps, LinkItem } from './LinkItem'

type NestedMenuItemProps = {
  href: LinkItemProps['href']
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
            key={item.href}
            nested
            label={item.label}
            href={item.href}
            setOpen={setOpen}
          />
        ))}
      </ul>
    </li>
  )
}
