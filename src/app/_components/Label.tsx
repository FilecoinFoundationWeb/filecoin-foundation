import React from 'react'

import { Label } from '@headlessui/react'
import { clsx } from 'clsx'

import { capitalize } from '@/utils/capitalize'

export type LabelProps = {
  label: string
  isHidden?: boolean
}

export function InputLabel({ label, isHidden = false }: LabelProps) {
  return (
    <Label
      className={clsx(
        'text-base font-bold text-brand-100',
        isHidden && 'sr-only',
      )}
    >
      {capitalize(label)}
    </Label>
  )
}
