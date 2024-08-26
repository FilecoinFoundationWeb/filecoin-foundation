import type { ZodError } from 'zod'

import { capitalize } from '@/utils/capitalize'

type Config = {
  location?: string
  context?: Record<string, string>
}

export function logZodError(zodError: ZodError, config: Config = {}) {
  const { location, context } = config

  const errorTitle = createErrorTitle(location)
  console.error(errorTitle)

  logZodIssues(zodError)

  if (context) {
    logContext(context)
  }

  console.error('------')
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
