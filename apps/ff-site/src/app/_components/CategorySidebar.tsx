'use client'

import type { ElementType } from 'react'

import type { TouchTarget } from '@filecoin-foundation/utils/types/touchTargetType'
import { clsx } from 'clsx'

import type { OptionType } from './Listbox/ListboxOption'

type CategorySidebarProps = {
  selected: OptionType
  options: Array<OptionType>
  onChange: (selected: OptionType) => void
}

type CategoryContainerProps = {
  children: React.ReactNode
  as?: ElementType
}

type CategoryItemProps = {
  name: string
  count?: number
  isSelected: boolean
  handleClick: () => void
}

const TOUCH_TARGET: TouchTarget = {
  touchAreaPadding: 'px-4',
  touchAreaOffset: '-ml-4',
}

export function CategorySidebar({
  selected,
  options,
  onChange,
}: CategorySidebarProps) {
  return (
    <CategorySidebar.Container>
      {options.map((option) => (
        <CategorySidebar.Item
          key={option.id}
          name={option.name}
          count={option.count}
          isSelected={selected.id === option.id}
          handleClick={() => onChange(option)}
        />
      ))}
    </CategorySidebar.Container>
  )
}

CategorySidebar.Container = function List({
  children,
  as: Component = 'ul',
}: CategoryContainerProps) {
  return (
    <Component className={clsx('space-y-4', TOUCH_TARGET.touchAreaOffset)}>
      {children}
    </Component>
  )
}

CategorySidebar.Item = function Item({
  name,
  count,
  isSelected,
  handleClick,
}: CategoryItemProps) {
  return (
    <li>
      <CategorySidebar.Button
        name={name}
        count={count}
        isSelected={isSelected}
        handleClick={handleClick}
      />
    </li>
  )
}

CategorySidebar.Button = function Button({
  name,
  count,
  isSelected,
  handleClick,
}: CategoryItemProps) {
  return (
    <button
      className={clsx(
        'w-full rounded-lg py-2 text-left font-bold text-pretty hover:bg-brand-700 focus:brand-outline',
        isSelected
          ? 'bg-brand-700 text-brand-400'
          : 'bg-transparent text-brand-300',
        count !== undefined && 'inline-flex items-baseline gap-2',
        TOUCH_TARGET.touchAreaPadding,
      )}
      onClick={handleClick}
    >
      <span className="text-nowrap">{name}</span>
      {count !== undefined && (
        <span className="text-sm font-light">({count})</span>
      )}
    </button>
  )
}
