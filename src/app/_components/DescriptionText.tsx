type DescriptionProps = {
  children: DescriptionTextType
  variant?: 'bold'
}

export type DescriptionTextType = string | string[]

export function DescriptionText({ children, variant }: DescriptionProps) {
  const fontStyles = {
    bold: 'text-xl font-bold',
  }

  console.log()

  if (Array.isArray(children)) {
    return (
      <>
        {children.map((item, index) => (
          <p key={index} className={variant && fontStyles[variant]}>
            {item}
          </p>
        ))}
      </>
    )
  }
  return <p className={variant && fontStyles[variant]}>{children}</p>
}
