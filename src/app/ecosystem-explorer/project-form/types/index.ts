import type { z } from 'zod'

import type { EcosystemProjectFormSchema } from '../schema/EcosystemProjectFormSchema'
import type { formatLogo } from '../utils/formatLogo'

export type EcosystemProjectFormData = z.infer<
  typeof EcosystemProjectFormSchema
>

export type EcosystemProjectFormDataWithoutLogo = Omit<
  EcosystemProjectFormData,
  'logo'
>

export type FormattedLogo = Awaited<ReturnType<typeof formatLogo>>
