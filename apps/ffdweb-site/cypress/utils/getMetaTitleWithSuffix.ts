import { ORGANIZATION_NAME_SHORT } from '@/constants/siteMetadata'

export function getMetaTitleWithSuffix(title: string) {
  return `${title} | ${ORGANIZATION_NAME_SHORT}`
}
