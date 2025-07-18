'use client'

import { useId } from 'react'

type StorageCategoryFilterProps = {
  name: string
  description: string
  count: number
  isActive?: boolean
  onClick: () => void
}

export function StorageCategoryFilter({
  name,
  description,
  count,
  isActive,
  onClick,
}: StorageCategoryFilterProps) {
  const id = useId()
  const descriptionId = `${id}-description`

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        className="peer sr-only"
        aria-describedby={descriptionId}
        checked={isActive}
        onChange={onClick}
      />

      <label
        htmlFor={id}
        className="group peer-checked:bg-brand-900 -ml-3 inline-flex cursor-pointer items-center gap-2 rounded-full p-1 pl-3 peer-focus:ring-2 peer-focus:ring-blue-800 peer-focus:ring-offset-2"
      >
        <p className="font-medium text-zinc-600 group-peer-checked:text-white">
          {name}
        </p>
        <span className="group-peer-checked:bg-brand-800 grid size-7 place-items-center rounded-full bg-zinc-200 text-xs font-medium text-zinc-700 group-peer-checked:text-white">
          {count}
        </span>
      </label>

      <p id={descriptionId} className="mt-3 text-sm text-zinc-600">
        {description}
      </p>
    </div>
  )
}
