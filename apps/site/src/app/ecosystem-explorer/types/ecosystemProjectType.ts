import { getEcosystemProjectData } from '../utils/getEcosystemProjectData'

export type EcosystemProject = Awaited<
  ReturnType<typeof getEcosystemProjectData>
>
