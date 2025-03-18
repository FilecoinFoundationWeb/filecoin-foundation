import clsx from 'clsx'

export type DescriptionProps = {
  isClamped?: boolean
  children: React.ReactNode
}

export function DescriptionText({ children, isClamped }: DescriptionProps) {
  const childrenArray = Array.isArray(children) ? children : [children]

  return childrenArray.map((item, index) => (
    <p key={index} className={clsx(isClamped && 'line-clamp-3 text-ellipsis')}>
      {item}
    </p>
  ))
}
