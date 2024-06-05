import { StaticImageData } from 'next/image'

import { Route } from 'next'

export type MemberData = {
  name: string
  title: string
  linkedin: Route
  image: StaticImageData
}
