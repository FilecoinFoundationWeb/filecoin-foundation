import type { StaticImageData } from 'next/image'

import type { Route } from 'next'

export type MemberData = {
  name: string
  title: string
  linkedin: Route
  image: StaticImageData
}
