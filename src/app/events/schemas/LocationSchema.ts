import { z } from 'zod'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'
import { createEnumSchema } from '@/utils/zodUtils'

type Location = {
  primary: string
  region?: string
}

const { validIds: validRegionIds } = getCMSFieldOptionsAndValidIds({
  collectionName: 'event_entries',
  fieldName: 'location.region',
})

const RegionSchema = createEnumSchema(validRegionIds)

export const LocationSchema = z
  .object({
    primary: z.string(),
    region: RegionSchema.optional(),
  })
  .refine(virtualEventHasNoRegion, {
    message: 'Virtual events cannot have a region.',
    path: ['region'],
  })
  .refine(inPersonEventHasRegion, {
    message: 'In-person events must have a region.',
    path: ['region'],
  })

function isVirtual(location: Location): boolean {
  return location.primary === 'Virtual'
}

function hasRegion(location: Location): boolean {
  return location.region !== undefined
}

function virtualEventHasNoRegion(location: Location): boolean {
  if (isVirtual(location)) {
    return !hasRegion(location)
  }
  return true
}

function inPersonEventHasRegion(location: Location): boolean {
  if (!isVirtual(location)) {
    return hasRegion(location)
  }
  return true
}
