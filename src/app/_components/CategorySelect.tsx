'use client'

import { clsx } from 'clsx'

import {
  type CategoryCounts,
  type CategoryOption,
  type CategorySetting,
} from '@/types/categoryTypes'

const touchTarget = {
  class: 'px-4',
  offsetClassY: '-mt-4',
  offsetClassX: '-ml-4',
} as const

type CategorySelectProps = {
  selectedCategory: CategoryOption
  categoryOptions: CategorySetting[]
  categoryCounts?: CategoryCounts
  onCategoryChange: (selectedCategory: CategoryOption) => void
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

export function CategorySelect({
  selectedCategory,
  categoryOptions,
  categoryCounts,
  onCategoryChange,
}: CategorySelectProps) {
  return (
    <CategorySelect.Container>
      {categoryOptions.map((option) => (
        <CategorySelect.Item
          key={option.id}
          name={option.name}
          isSelected={selectedCategory === option.id}
          count={categoryCounts?.[option.id]}
          handleClick={() => onCategoryChange(option.id)}
        />
      ))}
    </CategorySelect.Container>
  )
}

CategorySelect.Container = function List({
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

CategorySelect.Item = function Item({
  name,
  count,
  isSelected,
  handleClick,
}: CategoryItemProps) {
  return (
    <li>
      <CategorySelect.Button
        name={name}
        count={count}
        isSelected={isSelected}
        handleClick={handleClick}
      />
    </li>
  )
}

CategorySelect.Button = function Button({
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
