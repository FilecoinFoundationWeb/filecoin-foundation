import { z, type ZodError } from 'zod'

import { capitalize } from '@/utils/capitalize'

type LogConfig = {
  context?: Record<string, string>,
  location?: string
}

export function logZodError(zodError: ZodError, config: LogConfig = {}) {
  const { location, context } = config

  const errorTitle = createErrorTitle(location)
  console.error(errorTitle)

  logZodIssues(zodError)

  if (context) {
    logContext(context)
  }

  console.error('------')
}

export function createEnumSchema(list: Array<string>) {
  if (list.length === 0) {
    return z.never()
  } else if (list.length === 1) {
    return z.literal(list[0])
  } else {
    const [first, ...rest] = list
    return z.enum([first, ...rest])
  }
}

function createErrorTitle(location?: string) {
  let title = '🔥 Zod Validation Error'
  if (location) {
    title += ` - ${location}`
  }
  return title
}

function logZodIssues(zodError: ZodError) {
  zodError.issues.forEach((error) => {
    console.error(`Issue: ${error.message}`)
    console.error(`Path: ${error.path.join(' > ')}`)

    if (error.code === 'invalid_type') {
      console.error(`Expected: ${error.expected}`)
      console.error(`Received: ${error.received}`)
    }
  })
}

function logContext(context: Record<string, string>) {
  Object.entries(context).forEach(([key, value]) => {
    console.error(`${capitalize(key)}: ${value}`)
  })
}
