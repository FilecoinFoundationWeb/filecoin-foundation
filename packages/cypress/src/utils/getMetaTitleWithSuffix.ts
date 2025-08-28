type GetMetaTitleWithSuffixProps = {
  title: string
  organizationName: string
}

export function getMetaTitleWithSuffix({
  title,
  organizationName,
}: GetMetaTitleWithSuffixProps) {
  return `${title} | ${organizationName}`
}
