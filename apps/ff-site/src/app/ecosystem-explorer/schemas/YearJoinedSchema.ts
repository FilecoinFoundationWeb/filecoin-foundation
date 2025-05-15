import { z } from 'zod'

import { FILECOIN_LAUNCH_YEAR } from '@/ecosystem-explorer/project-form/utils/getYearOptions'

const currentYear = new Date().getFullYear()

export const YearJoinedSchema = z.coerce
  .number()
  .int()
  .min(FILECOIN_LAUNCH_YEAR)
  .max(currentYear)
