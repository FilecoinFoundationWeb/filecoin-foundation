export type NextServerSearchParams = {
  [key: string]: string | Array<string> | undefined
}

export type AsyncNextServerSearchParams = Promise<NextServerSearchParams>
