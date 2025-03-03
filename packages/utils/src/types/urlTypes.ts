export type QueryParamValue = string | Array<string> | undefined
export type QueryParams = Record<string, QueryParamValue>
export type AsyncQueryParams = Promise<QueryParams>
