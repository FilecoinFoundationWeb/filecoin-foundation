import React from 'react'

import { Label } from '@headlessui/react'

import { capitalize } from '@/utils/capitalize'

export type LabelProps = {
  label: string
}

export function LabelComponent({ label }: LabelProps) {
  return (
    <Label className="text-sm font-bold text-brand-300">
      {capitalize(label)}
    </Label>
  )
}
