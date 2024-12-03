import { Description } from '@headlessui/react'

export type FormLabelDescriptionProps = {
  children: React.ReactNode
}

export function FormLabelDescription({ children }: FormLabelDescriptionProps) {
  return (
    <Description className="text-sm text-brand-100">{children}</Description>
  )
}
