import { Input, type InputProps as HeadlessInputProps } from '@headlessui/react'
import { clsx } from 'clsx'

type ExcludedHeadlessUIProps = 'invalid' | 'className'

export type FormInputProps = Omit<
  HeadlessInputProps,
  ExcludedHeadlessUIProps
> & {
  error: string | undefined
}

export function FormInput({ error, ...rest }: FormInputProps) {
  return (
    <Input
      {...rest}
      invalid={Boolean(error)}
      className={clsx('form-text-input', error && 'form-text-input--error')}
    />
  )
}
