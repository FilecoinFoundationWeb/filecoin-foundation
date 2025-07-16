import React from 'react'

import { clsx } from 'clsx'

import type { Button } from '@/components/Button'

export type ButtonRowProps = {
  centered?: boolean
  buttons:
    | React.ReactElement<typeof Button>
    | Array<React.ReactElement<typeof Button>>
}

export function ButtonRow({ buttons, centered }: ButtonRowProps) {
  return (
    <div
      className={clsx(
        'flex flex-wrap gap-3 sm:gap-6',
        centered && 'justify-center',
      )}
    >
      {Array.isArray(buttons)
        ? buttons.map((button, index) =>
            React.cloneElement(button, { key: index }),
          )
        : buttons}
    </div>
  )
}
