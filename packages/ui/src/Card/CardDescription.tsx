import { clsx } from 'clsx'

export type CardDescriptionProps = {
  text: string
  isClamped?: boolean
}

export function CardDescription({ text, isClamped }: CardDescriptionProps) {
  return (
    <p className={clsx(isClamped && 'children-ellipsis line-clamp-3')}>
      {text}
    </p>
  )
}
