import { z } from 'zod'

import { getCMSFieldOptionsAndValidIds } from '@/utils/getCMSFieldOptionsAndValidIds'
import { createEnumSchema } from '@/utils/zodUtils'

type Location = {
  primary: string
  region?: string | null
}

const { validIds: validRegionIds } = getCMSFieldOptionsAndValidIds({
  collectionName: 'event_entries',
  fieldName: 'location.region',
})

const RegionSchema = createEnumSchema(validRegionIds)

export const LocationSchema = z
  .object({
    primary: z.string(),
    region: RegionSchema.nullable().optional(),
  })
  .strict()
  .refine(virtualEventHasNoRegion, {
    message: 'Virtual events cannot have a region.',
    path: ['region'],
  })
  .refine(inPersonEventHasRegion, {
    message: 'In-person events must have a region.',
    path: ['region'],
  })

function isVirtual(location: Location) {
  return location.primary === 'Virtual'
}

function hasRegion(location: Location) {
  return location.region !== undefined && location.region !== null
}

function virtualEventHasNoRegion(location: Location) {
  if (isVirtual(location)) {
    return !hasRegion(location)
  }
  return true
}

function inPersonEventHasRegion(location: Location) {
  if (!isVirtual(location)) {
    return hasRegion(location)
  }
  return true
}
