import type { OptionType } from './FormListbox'

type ListboxOptionTextProps = { option: OptionType }

export function ListboxOptionText({ option }: ListboxOptionTextProps) {
  const { name, count } = option

  return (
    <span>
      {name}
      {count !== undefined && (
        <span className="ml-2 text-sm font-light">({count})</span>
      )}
    </span>
  )
}
