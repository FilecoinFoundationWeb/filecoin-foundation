import type { ElementType } from 'react'

type ListboxGroupHeaderProps = {
  label: string
  as?: ElementType
  children: React.ReactNode
}

export function ListboxGroupHeader({
  label,
  as: Component = 'ul',
  children,
}: ListboxGroupHeaderProps) {
  return (
    <Component role="group" aria-labelledby={label}>
      <li
        key={label}
        id={label}
        className="text-brand-300 px-3 py-2"
        role="presentation"
      >
        {label}
      </li>
      <span className="block px-1">{children}</span>
    </Component>
  )
}
