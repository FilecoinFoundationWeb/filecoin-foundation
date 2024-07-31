import React from 'react'

import { WarningCircle } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@/components/Icon'

import { capitalize } from '@/utils/capitalize'

export type InputProps = {
  label: string
  error?: string
} & React.ComponentProps<'input'>

export function Input({ id, label, error, value = '', ...rest }: InputProps) {
  return (
    <div className="relative space-y-2">
      <label className="text-sm font-bold text-brand-300" htmlFor={id}>
        {capitalize(label)}
      </label>
      <div className="relative">
        <input
          id={id}
          value={value}
          className={`peer form-input relative block w-full min-w-48 rounded-lg border border-brand-300 bg-brand-800 px-4 py-3 pr-9 focus:brand-outline placeholder:text-brand-300 hover:border-brand-400 placeholder:hover:text-brand-400 focus:text-brand-100 placeholder:focus:text-brand-100 [&::-webkit-search-cancel-button]:appearance-none ${error && 'border-error'}`}
          {...rest}
        />

        {error && (
          <div className="text-error peer pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <Icon component={WarningCircle} />
          </div>
        )}
      </div>

      {error && <span className="text-error absolute -bottom-8">{error}</span>}
    </div>
  )
}
