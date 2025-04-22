import { ROOT_METADATA } from '@/constants/siteMetadata'

export function getMetaTitleTemplate(title: string) {
  return ROOT_METADATA.title.template.replace('%s', title)
}
