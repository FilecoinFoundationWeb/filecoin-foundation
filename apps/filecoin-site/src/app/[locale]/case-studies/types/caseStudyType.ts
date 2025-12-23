import { getCaseStudyData } from '../utils/getCaseStudyData'

export type CaseStudy = Awaited<ReturnType<typeof getCaseStudyData>>
