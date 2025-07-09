import { Description } from '@headlessui/react'

export type FormLabelDescriptionProps = {
  children: React.ReactNode
}

export function FormLabelDescription({ children }: FormLabelDescriptionProps) {
  return (
    <Description className="text-brand-100 text-sm">{children}</Description>
  )
}
