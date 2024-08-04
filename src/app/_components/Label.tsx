import React from 'react'

import { Label } from '@headlessui/react'

import { capitalize } from '@/utils/capitalize'

export type LabelProps = {
  label: string
  isHidden: boolean
}

export function LabelComponent({ label, isHidden = false }: LabelProps) {
  return (
    <Label
      className={`text-base font-bold text-brand-100 ${isHidden && 'sr-only'}`}
    >
      {capitalize(label)}
    </Label>
  )
}
