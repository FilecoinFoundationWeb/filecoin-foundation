import type { LumaEvent } from '../schemas/LumaSchema'

export function mapLumaEventToMetadata({
  start_at,
  end_at,
  geo_address_json,
}: LumaEvent) {
  return {
    startDate: start_at,
    endDate: end_at,
    location: geo_address_json?.address || '',
  }
}
