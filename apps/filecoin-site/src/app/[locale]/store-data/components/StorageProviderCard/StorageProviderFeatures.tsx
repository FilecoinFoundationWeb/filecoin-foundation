import type { ComponentType } from 'react'

export type StorageLabelsContainerProps = {
  list: Array<string>
  Component: ComponentType<{ children: string }>
}

export function StorageProviderFeatures({
  list,
  Component,
}: StorageLabelsContainerProps) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {list.map((item) => (
        <li key={item}>
          <Component>{item}</Component>
        </li>
      ))}
    </ul>
  )
}
