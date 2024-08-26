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

  console.error('------')
  console.error(errorTitle)

  zodError.errors.forEach(({ message, path }) => {
    console.error(`Issue: ${message}`)
    console.error(`Path: ${path.join(' > ')}`)
  })

  if (context) {
    Object.entries(context).forEach(([key, value]) => {
      console.error(`${capitalize(key)}: ${value}`)
    })
  }

  console.error('------')
}
