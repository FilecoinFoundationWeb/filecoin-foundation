import { getLearningResourceData } from '../utils/getLearningResourceData'

export type LearningResource = Awaited<
  ReturnType<typeof getLearningResourceData>
>
