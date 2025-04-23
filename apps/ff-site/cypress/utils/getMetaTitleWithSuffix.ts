import { ORGANIZATION_NAME } from '@/constants/siteMetadata'

export function getMetaTitleWithSuffix(title: string) {
  return `${title} | ${ORGANIZATION_NAME}`
}
