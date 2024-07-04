type DescriptionProps = {
  children: DescriptionTextType
}

export type DescriptionTextType = React.ReactNode

export function DescriptionText({ children }: DescriptionProps) {
  if (Array.isArray(children)) {
    return (
      <>
        {children.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </>
    )
  }
  return <p>{children}</p>
}
