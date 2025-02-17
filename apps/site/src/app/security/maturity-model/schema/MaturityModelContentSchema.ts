import { type ComponentType } from 'react'

import { z } from 'zod'

export const MaturityModelContentSchema = z.object({
  title: z.string(),
  order: z.number().int().min(1).max(9),
  Content: z.custom<ComponentType>().refine(isAFunction),
})

function isAFunction(value: unknown) {
  return typeof value === 'function'
}
