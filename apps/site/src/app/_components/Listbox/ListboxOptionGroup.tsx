import { type ElementType } from 'react'

type ListboxOptionGroupProps = {
  name: string
  as?: ElementType
}

export function ListboxOptionGroup({
  name,
  as: Component = 'li',
}: ListboxOptionGroupProps) {
  return (
    <Component className="px-5 py-2 text-brand-300" role="presentation">
      {name}
    </Component>
  )
}
