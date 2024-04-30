type DescriptionProp = string | string[]

export default function setDescriptionParagraph(description: DescriptionProp) {
  if (Array.isArray(description)) {
    return (
      <>
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </>
    )
  }
  return <p>{description}</p>
}
