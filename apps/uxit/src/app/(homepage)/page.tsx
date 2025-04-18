import { CardGrid } from '@filecoin-foundation/ui/CardGrid'

import { Card } from '@/components/Card'

export default function Home() {
  return (
    <CardGrid as="section" cols="smThree">
      <Card
        as="div"
        title={{ text: 'Site Audit Reports' }}
        description={{
          text: 'Data-driven insights to improve usability across Filecoin network sites.',
        }}
        cta={{
          href: '/reports',
          text: 'View Reports',
        }}
      />
      <Card
        as="div"
        title={{ text: 'UXIT Dogfooding Roadmap' }}
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
        title={{ text: 'UXIT Dogfooding Reports' }}
        description={{
          text: 'Explore detailed feedback and insights from recent dogfooding efforts across Filecoin products.',
        }}
        cta={{
          href: 'https://filecoin.notion.site/Dogfooding-Reports-List-14e14075f5194995a5a1ba198c932613',
          text: 'View Reports',
        }}
      />
    </CardGrid>
  )
}
