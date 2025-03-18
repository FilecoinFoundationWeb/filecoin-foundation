import clsx from 'clsx'

type DescriptionProps = {
  isClamped?: boolean
  children: DescriptionTextType
}

export type DescriptionTextType = React.ReactNode

export function DescriptionText({ children, isClamped }: DescriptionProps) {
  if (Array.isArray(children)) {
    return (
      <>
        {children.map((item, index) => (
          <p
            className={clsx(isClamped && 'line-clamp-3 text-ellipsis')}
            key={index}
          >
            {item}
          </p>
        ))}
      </>
    )
  }

  return (
    <p className={clsx(isClamped && 'line-clamp-3 text-ellipsis')}>
      {children}
    </p>
  )
}
