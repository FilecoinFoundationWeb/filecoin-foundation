import React from 'react'

import { WarningCircle } from '@phosphor-icons/react/dist/ssr'

import { capitalize } from '@/utils/capitalize'

import { Icon } from './Icon'

export type InputProps = {
  id: string
  label: string
  type: 'email' | 'password' | 'text'
  value?: string
  placeholder?: string
  errors?: string
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, errors, value = '', ...rest }, ref) => {
    return (
      <div className="relative space-y-2">
        <label className="text-sm font-bold text-brand-300" htmlFor={id}>
          {capitalize(label)}
        </label>
        <div className="relative">
          <input
            ref={ref}
            id={id}
            value={value}
            className={`peer form-input relative block w-full min-w-48 rounded-lg border border-brand-300 bg-brand-800 px-4 py-3 pr-9 focus:brand-outline placeholder:text-brand-300 hover:border-brand-400 placeholder:hover:text-brand-400 focus:text-brand-100 placeholder:focus:text-brand-100 [&::-webkit-search-cancel-button]:appearance-none ${errors && 'border-error'}`}
            {...rest}
          />

          {errors && (
            <div className="text-error peer pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <Icon component={WarningCircle} />
            </div>
          )}
        </div>

        {errors && (
          <span className="text-error absolute -bottom-8">{errors}</span>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
