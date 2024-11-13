'use client'

import { clsx } from 'clsx'

import {
  type CategoryCounts,
  type CategoryId,
  type CategoryOption,
} from '@/types/categoryTypes'

const touchTarget = {
  class: 'px-4',
  offsetClassY: '-mt-4',
  offsetClassX: '-ml-4',
} as const

type CategorySidebarProps = {
  selected: CategoryId
  options: Array<CategoryOption>
  counts?: CategoryCounts
  onChange: (selected: CategoryId) => void
}

type CategoryContainerProps = {
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements
}

type CategoryItemProps = {
  name: string
  count?: number
  isSelected: boolean
  handleClick: () => void
}

export function CategorySidebar({
  selected,
  options,
  counts,
  onChange,
}: CategorySidebarProps) {
  return (
    <CategorySidebar.Container>
      {options.map((option) => (
        <CategorySidebar.Item
          key={option.id}
          name={option.name}
          isSelected={selected === option.id}
          count={counts?.[option.id]}
          handleClick={() => onChange(option.id)}
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
    <Component
      className={clsx(
        'space-y-4',
        touchTarget.offsetClassX,
        touchTarget.offsetClassY,
      )}
    >
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
        'text-pretty rounded-lg py-2 text-left font-bold focus:brand-outline hover:bg-brand-700',
        isSelected
          ? 'bg-brand-700 text-brand-400'
          : 'bg-transparent text-brand-300',
        count !== undefined && 'inline-flex items-baseline gap-2',
        touchTarget.class,
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
