import type { ComponentType } from 'react'

import { z } from 'zod'

export const MaturityModelContentSchema = z.object({
  title: z.string(),
  order: z.number().refine(isGreaterThanZero, {
    message: 'Order must be greater than 0',
  }),
  Content: z.custom<ComponentType>().refine(isAFunction),
})

function isGreaterThanZero(value: number) {
  return value > 0
}

function isAFunction(value: unknown) {
  return typeof value === 'function'
}
