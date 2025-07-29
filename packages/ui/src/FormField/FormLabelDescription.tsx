import { Description } from '@headlessui/react'

export type FormLabelDescriptionProps = {
  children: React.ReactNode
}

export function FormLabelDescription({ children }: FormLabelDescriptionProps) {
  return (
    <Description className="form-label-description">{children}</Description>
  )
}
