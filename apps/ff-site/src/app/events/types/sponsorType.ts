import type { Event } from '@/qino/collections/events'

export type Sponsors = NonNullable<Event['sponsors']>
export type SponsorTier = keyof Sponsors
export type Sponsor = NonNullable<Sponsors[SponsorTier]>[number]
