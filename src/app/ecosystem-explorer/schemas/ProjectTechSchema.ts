import { z } from 'zod'

const TECHNOLOGIES = ['filecoin', 'ipfs'] as const

export const ProjectTechSchema = z
  .array(z.enum(TECHNOLOGIES))
  .nonempty()
  .max(TECHNOLOGIES.length)
