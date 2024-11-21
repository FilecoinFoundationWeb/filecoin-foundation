import type { z } from 'zod'

import type { EcosystemProjectFormSchema } from '../schema/EcosystemProjectFormSchema'

export type EcosystemProjectFormData = z.infer<
  typeof EcosystemProjectFormSchema
>

export type EcosystemProjectFormDataWithoutLogo = Omit<
  EcosystemProjectFormData,
  'logo'
>
