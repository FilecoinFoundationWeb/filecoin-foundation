import * as React from 'react'

export type InputFieldProps = {
  name: string
  type: 'email' | 'password' | 'search' | 'text'
  id: string
  label: string
  isLabelHidden?: boolean
  placeholder?: string
  value?: string
  defaultValue?: string
  errorMessage?: string
  disabled?: boolean
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, errorMessage, isLabelHidden = true, ...rest }, ref) => {
    return (
      <div className="relative space-y-2">
        <label
          className={`text-sm font-bold text-brand-300 ${isLabelHidden ? 'sr-only' : ''}`}
          htmlFor={id}
        >
          {rest.label}
        </label>
        <input
          ref={ref}
          id={id}
          className="peer form-input block w-full rounded-lg border border-brand-300 bg-brand-800 px-11 py-3 focus:brand-outline placeholder:text-brand-300 hover:border-brand-400 placeholder:hover:text-brand-400 focus:text-brand-100 placeholder:focus:text-brand-100 [&::-webkit-search-cancel-button]:appearance-none"
          {...rest}
        />
        {errorMessage && (
          <span className="absolute -bottom-8 text-brand-300">
            {errorMessage}
          </span>
        )}
      </div>
    )
  },
)

InputField.displayName = 'InputField'
