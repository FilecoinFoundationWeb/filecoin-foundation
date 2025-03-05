type DescriptionProps = {
  className?: string
  children: DescriptionTextType
}

export type DescriptionTextType = React.ReactNode

export function DescriptionText({ className, children }: DescriptionProps) {
  if (Array.isArray(children)) {
    return (
      <>
        {children.map((item, index) => (
          <p className={className} key={index}>
            {item}
          </p>
        ))}
      </>
    )
  }

  return <p className={className}>{children}</p>
}
