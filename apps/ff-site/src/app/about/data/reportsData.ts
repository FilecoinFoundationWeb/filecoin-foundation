import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import annualReport from '@/assets/images/2024-annual-report-hero.webp'

type ReportData = {
  title: string
  description: string
  link: string
  image?: StaticImageProps
}

export const reportsData: Array<ReportData> = [
  {
    title: 'Filecoin Foundation 2024 Annual Report',
    description: `Read the full report to learn more about the Foundation's work in 2024.`,
    link: FILECOIN_FOUNDATION_URLS.annualReports['2024'],
    image: { data: annualReport, alt: '2024 Annual Report' },
  },
  {
    title: 'Filecoin Foundation 2023 Annual Report',
    description: `Read the full report to learn more about the Foundation's work in 2023.`,
    link: FILECOIN_FOUNDATION_URLS.annualReports['2023'],
  },
  {
    title: 'State of Filecoin Q3 2024',
    description:
      'Insights from Messari’s recently released Q1 2024 Filecoin Ecosystem Report.',
    link: 'https://messari.io/report/state-of-filecoin-q3-2024',
  },
]
