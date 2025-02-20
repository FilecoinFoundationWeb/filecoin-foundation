import { z } from 'zod'

import { FILECOIN_CREATION_YEAR } from '@/ecosystem-explorer/project-form/utils/getYearOptions'

const thisYear = new Date().getFullYear()

export const YearJoinedSchema = z
  .number()
  .int()
  .min(FILECOIN_CREATION_YEAR)
  .max(thisYear)
