import { getProjectData } from '../utils/getProjectData'

export type Project = Awaited<ReturnType<typeof getProjectData>>
