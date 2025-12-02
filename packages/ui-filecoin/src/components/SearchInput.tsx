'use client'

import { useRef } from 'react'

import { Input, Label, Field, Button } from '@headlessui/react'
import { MagnifyingGlassIcon, XIcon } from '@phosphor-icons/react/dist/ssr'

import { Icon } from './Icon'

type SearchInputProps = {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

export function SearchInput({ value, onChange, disabled }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Field className="w-full" disabled={disabled}>
      <Label className="sr-only">Search</Label>
      <div className="relative">
        <Input
          ref={inputRef}
          className="focus:brand-outline peer block w-full rounded-lg border border-(--input-border-color) px-12 py-3 placeholder:text-(--input-placeholder-color) [&::-webkit-search-cancel-button]:appearance-none"
          placeholder="Search"
          type="search"
          value={value}
          disabled={disabled}
          onChange={(event) => onChange(event.target.value)}
        />
        <div className="peer pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-(--search-input-icon-color)">
          <Icon component={MagnifyingGlassIcon} />
        </div>
        {value && (
          <Button
            className="focus:brand-outline absolute top-1 right-1 flex size-10 cursor-pointer items-center justify-center rounded-sm text-(--search-input-icon-color) hover:text-(--search-input-clear-icon-color-hover)"
            aria-label="Clear search input"
            onClick={() => {
              onChange('')
              inputRef.current?.focus()
            }}
          >
            <Icon component={XIcon} size={16} weight="bold" />
          </Button>
        )}
      </div>
    </Field>
  )
}
