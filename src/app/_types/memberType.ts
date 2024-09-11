import type { Route } from 'next'

import type { StaticImageDataWithAlt } from '@/types/sharedProps/imageType'

export type MemberData = {
  name: string
  title: string
  linkedin: Route
  image: StaticImageDataWithAlt
}
