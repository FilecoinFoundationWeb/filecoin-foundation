import type { z } from 'zod'

import type { EcosystemProjectFormSchema } from '../schema/EcosystemProjectFormSchema'
import type { formatFile } from '../utils/formatFile'

export type EcosystemProjectFormData = z.infer<
  typeof EcosystemProjectFormSchema
>

export type EcosystemProjectFormDataWithoutLogo = Omit<
  EcosystemProjectFormData,
  'logo'
>

export type FormattedFile = Awaited<ReturnType<typeof formatFile>>
