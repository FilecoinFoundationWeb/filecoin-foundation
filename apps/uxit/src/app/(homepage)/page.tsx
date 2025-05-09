import { CardGrid } from '@filecoin-foundation/ui/CardGrid'

import { PATHS } from '@/constants/paths'

import { Card } from '@/components/Card'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Header />
      <CardGrid as="section" cols="mdTwo">
        <Card
          as="div"
          title={{ text: 'Dogfooding Roadmap' }}
          description={{
            text: 'Track the status of dogfooding projects and explore what’s coming up next.',
          }}
          cta={{
            href: 'https://filecoin.notion.site/Dogfooding-Roadmap-506b84a493d746e68b7c55dbd2a2d9d1',
            text: 'View Roadmap',
          }}
        />
        <Card
          as="div"
          title={{ text: 'Dogfooding Reports' }}
          description={{
            text: 'Explore detailed feedback and insights from recent dogfooding efforts across Filecoin products.',
          }}
          cta={{
            href: 'https://filecoin.notion.site/Dogfooding-Reports-List-14e14075f5194995a5a1ba198c932613',
            text: 'View Reports',
          }}
        />
        <Card
          as="div"
          title={{ text: 'Site Audit Reports' }}
          description={{
            text: 'Data-driven insights to improve usability across Filecoin network sites.',
          }}
          cta={{
            href: PATHS.SITE_AUDIT_REPORTS.path,
            text: 'View Reports',
          }}
        />
        <Card
          as="div"
          title={{ text: 'Monthly Updates' }}
          description={{
            text: 'Stay up to date with the latest insights, progress, and highlights from the UXIT team.',
          }}
          cta={{
            href: 'https://filecoin.notion.site/User-Experience-Insights-UXIT-Monthly-Updates-Filecoin-Foundation-1827631f282580618c66e9cf9d8b60ad',
            text: 'View Updates',
          }}
        />
      </CardGrid>
    </div>
  )
}
