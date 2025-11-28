import {
  Input as HeadlessInput,
  type InputProps as HeadlessInputProps,
} from '@headlessui/react'
import { clsx } from 'clsx'

type InputProps = {
  onChange: (value: string) => void
} & Omit<HeadlessInputProps, 'onChange'>

export default function Input({ onChange, className, ...rest }: InputProps) {
  return (
    <HeadlessInput
      {...rest}
      onChange={(event) => onChange(event.target.value)}
      className={clsx(
        'focus:brand-outline block w-full rounded-lg border border-(--input-border-color) p-3 placeholder:text-(--input-placeholder-color)',
        className,
      )}
    />
  )
}
