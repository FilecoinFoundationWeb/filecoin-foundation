import { getEventData } from '../utils/getEventData'

export type Event = Awaited<ReturnType<typeof getEventData>>
