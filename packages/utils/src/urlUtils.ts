type Params = Record<string, string | string[] | undefined>

export function normalizeQueryParam(params: Params, key: string) {
  const param = getFirstQueryParam(params, key)
  return param?.trim().toLowerCase()
}

function getFirstQueryParam(params: Params, key: string) {
  const param = params[key]
  return Array.isArray(param) ? param[0] : param
}
