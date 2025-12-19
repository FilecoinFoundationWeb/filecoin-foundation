import { capitalize } from '@filecoin-foundation/ui-filecoin/utils'

export type TagProps = {
  children: string
}

export function TagLabel({ children }: TagProps) {
  return (
    <span className="text-sm/5 text-(--color-paragraph-text-strong)">
      {capitalize(children)}
    </span>
  )
}
