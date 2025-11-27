import type { QueryParams } from '../types/urlTypes'

export function normalizeQueryParam(params: QueryParams, key: string) {
  const param = getFirstQueryParam(params, key)
  return param?.trim().toLowerCase()
}

function getFirstQueryParam(params: QueryParams, key: string) {
  const param = params[key]
  return Array.isArray(param) ? param[0] : param
}
