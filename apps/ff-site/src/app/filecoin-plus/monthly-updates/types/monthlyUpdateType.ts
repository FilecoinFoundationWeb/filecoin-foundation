import { getMonthlyUpdateData } from '../utils/getMonthlyUpdateData'

export type MonthlyUpdate = Awaited<ReturnType<typeof getMonthlyUpdateData>>
