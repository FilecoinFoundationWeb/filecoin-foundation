import type { LocalImageData } from '@/types/sharedProps/imageType'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import annualReport from '@/assets/images/022624-ff-anualreport.png'

type ReportData = {
  title: string
  description: string
  link: string
  image?: LocalImageData
}

export const reportsData: Array<ReportData> = [
  {
    title: 'Filecoin Foundation 2023 Annual Report',
    description: `Read the full report to learn more about the Foundation's work in 2023.`,
    link: FILECOIN_FOUNDATION_URLS.annualReports['2023'],
    image: { ...annualReport, alt: '2023 Annual Report' },
  },
  {
    title: 'Filecoin Foundation 2022 Annual Report',
    description: `Read the full report to learn more about the Foundation's work in 2022.`,
    link: FILECOIN_FOUNDATION_URLS.annualReports['2022'],
  },
  {
    title: 'State of Filecoin Q1 2024',
    description:
      'Insights from Messari’s recently released Q1 2024 Filecoin Ecosystem Report.',
    link: FILECOIN_FOUNDATION_URLS.annualReports['2024'],
  },
]
