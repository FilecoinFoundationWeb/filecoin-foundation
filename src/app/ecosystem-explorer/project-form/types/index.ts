import type { EcosystemProject } from '@/types/ecosystemProjectType'

export type Timestamps = {
  createdOn: EcosystemProject['createdOn']
  updatedOn: NonNullable<EcosystemProject['updatedOn']>
  publishedOn: NonNullable<EcosystemProject['publishedOn']>
}

export type SubmitOption = {
  logoIsUpdated: boolean
}
