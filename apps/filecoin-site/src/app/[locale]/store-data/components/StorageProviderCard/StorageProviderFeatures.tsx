import type { ComponentType } from 'react'

import { clsx } from 'clsx'

export type StorageLabelsContainerProps = {
  list: Array<string>
  direction: 'row' | 'column'
  Component: ComponentType<{ children: string }>
}

export function StorageProviderFeatures({
  list,
  direction,
  Component,
}: StorageLabelsContainerProps) {
  return (
    <ul
      className={clsx(
        'flex flex-wrap gap-2.5',
        direction === 'column' && 'flex-col',
        direction === 'row' && 'flex-row',
      )}
    >
      {list.map((item) => (
        <li key={item}>
          <Component>{item}</Component>
        </li>
      ))}
    </ul>
  )
}
