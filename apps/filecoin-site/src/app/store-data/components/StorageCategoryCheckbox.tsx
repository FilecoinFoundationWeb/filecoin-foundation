'use client'

import { Input, Label, Field, Description } from '@headlessui/react'

type StorageCategoryCheckboxProps = {
  name: string
  description: string
  count: number
  checked?: boolean
  onClick: () => void
}

export function StorageCategoryCheckbox({
  name,
  description,
  count,
  checked,
  onClick,
}: StorageCategoryCheckboxProps) {
  return (
    <Field>
      <Input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={onClick}
      />

      <Label className="group peer-checked:bg-brand-900 -ml-3 inline-flex cursor-pointer items-center gap-2 rounded-full p-1 pl-3 peer-focus:ring-2 peer-focus:ring-blue-800 peer-focus:ring-offset-2">
        <p className="font-medium text-[var(--color-text-paragraph)] group-peer-checked:text-white">
          {name}
        </p>
        <span className="group-peer-checked:bg-brand-800 grid size-7 place-items-center rounded-full bg-zinc-200 text-xs font-medium text-zinc-700 group-peer-checked:text-white">
          {count}
        </span>
      </Label>

      <Description className="mt-3 text-sm text-[var(--color-text-paragraph)]">
        {description}
      </Description>
    </Field>
  )
}
