import { NextServerSearchParams } from '@/types/searchParams'

function getFirstQueryParam(params: NextServerSearchParams, key: string) {
  const param = params[key]
  return Array.isArray(param) ? param[0] : param
}

export function normalizeQueryParam(
  params: NextServerSearchParams,
  key: string,
) {
  const param = getFirstQueryParam(params, key)
  return param?.trim().toLowerCase()
}
