type StorageCategoryFilterProps = {
  name: string
  description: string
  count: number
  isActive?: boolean
}

export function StorageCategoryFilter({
  name,
  description,
  count,
  isActive,
}: StorageCategoryFilterProps) {
  return (
    <li
      role="tab"
      className="focus:brand-outline group"
      tabIndex={0}
      aria-selected={isActive}
    >
      <div className="group-aria-selected:bg-brand-900 -ml-3 inline-flex items-center gap-2 rounded-full p-1 pl-3">
        <p className="font-medium text-zinc-600 group-aria-selected:text-white">
          {name}
        </p>
        <span className="group-aria-selected:bg-brand-800 grid size-7 place-items-center rounded-full bg-zinc-200 text-xs font-medium text-zinc-700 group-aria-selected:text-white">
          {count}
        </span>
      </div>

      <p className="mt-3 hidden text-sm text-zinc-600 lg:block">
        {description}
      </p>
    </li>
  )
}
