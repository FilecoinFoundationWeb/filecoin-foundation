import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import annualReportImageUrl from '../../../../public/assets/images/022624-ff-anualreport.png'

export const reportsData = [
  {
    title: 'Filecoin Foundation 2023 Annual Report',
    description: `Read the full report to learn more about the Foundation's work in 2023.`,
    link: FILECOIN_FOUNDATION_URLS.annualReports.latest,
    image: { url: annualReportImageUrl, alt: '2023 Annual Report' },
  },
  {
    title: 'Filecoin Foundation 2022 Annual Report',
    description: `Read the full report to learn more about the Foundation's work in 2022.`,
    link: FILECOIN_FOUNDATION_URLS.annualReports.previous,
  },
  {
    title: 'State of Filecoin Q1 2024',
    description:
      'Insights from Messari’s recently released Q1 2024 Filecoin Ecosystem Report.',
    link: '',
  },
]
