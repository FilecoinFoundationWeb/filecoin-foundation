import type { ZodError } from 'zod'

import { capitalize } from '@/utils/capitalize'

type Config = {
  location?: string
  context?: Record<string, string>
}

export function logZodError(zodError: ZodError, config: Config = {}) {
  const { location, context } = config

  let errorTitle = '🔥 Zod Validation Error'

  if (location) {
    errorTitle += ` - ${location}`
  }

  console.error(errorTitle)

  zodError.issues.forEach((error) => {
    console.error(`Issue: ${error.message}`)
    console.error(`Path: ${error.path.join(' > ')}`)

    if (error.code === 'invalid_type') {
      console.error(`Expected: ${error.expected}`)
      console.error(`Received: ${error.received}`)
    }
  })

  if (context) {
    Object.entries(context).forEach(([key, value]) => {
      console.error(`${capitalize(key)}: ${value}`)
    })
  }

  console.error('------')
}
