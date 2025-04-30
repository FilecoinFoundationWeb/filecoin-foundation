'use client'

import { clsx } from 'clsx'

import type { OptionType } from '@filecoin-foundation/ui/Listbox/ListboxOption'
import type { TouchTarget } from '@filecoin-foundation/utils/types/touchTargetType'

type FilterSidebarProps = {
  selected: OptionType
  options: Array<OptionType>
  onChange: (selected: OptionType) => void
}

type FilterContainerProps = {
  children: React.ReactNode
}

type FilterItemProps = Pick<OptionType, 'name' | 'count'> & {
  isSelected: boolean
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const TOUCH_TARGET = {
  touchAreaPadding: 'px-4',
  touchAreaOffset: '-ml-4',
} as const satisfies TouchTarget

export function FilterSidebar({
  selected,
  options,
  onChange,
}: FilterSidebarProps) {
  return (
    <FilterSidebar.Container>
      {options.map((option) => (
        <li key={option.id}>
          <FilterSidebar.Button
            name={option.name}
            count={option.count}
            isSelected={selected.id === option.id}
            handleClick={() => onChange(option)}
          />
        </li>
      ))}
    </FilterSidebar.Container>
  )
}

FilterSidebar.Container = function List({ children }: FilterContainerProps) {
  return (
    <ul className={clsx('space-y-3', TOUCH_TARGET.touchAreaOffset)}>
      {children}
    </ul>
  )
}

FilterSidebar.Button = function Button({
  name,
  count,
  isSelected,
  handleClick,
}: FilterItemProps) {
  return (
    <button
      data-selected={isSelected}
      className={clsx(
        'filter-sidebar-button focus:brand-outline w-full cursor-pointer text-pretty px-4 py-3 text-left',
        typeof count === 'number' && 'inline-flex items-baseline gap-2',
        TOUCH_TARGET.touchAreaPadding,
      )}
      onClick={handleClick}
    >
      <span className="text-nowrap font-bold">{name}</span>
      {typeof count === 'number' && (
        <span className="text-sm font-light">({count})</span>
      )}
    </button>
  )
}
