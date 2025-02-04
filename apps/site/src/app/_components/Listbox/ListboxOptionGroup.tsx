import type { ElementType } from 'react'

type ListboxOptionGroupProps = {
  label: string
  as?: ElementType
  children: React.ReactNode
}

export function ListboxOptionGroup({
  label,
  as: Component = 'ul',
  children,
}: ListboxOptionGroupProps) {
  return (
    <Component role="group" aria-labelledby={label}>
      <li
        key={label}
        id={label}
        className="px-3 py-2 text-brand-300"
        role="presentation"
      >
        {label}
      </li>
      {children}
    </Component>
  )
}
