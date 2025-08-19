import { SectionDivider } from '@/components/SectionDivider'

import {
  filecoin,
  traditionalCloud,
} from '../../data/filecoinVsCloudComparison'

import { Column } from './Column'

export function ComparisonTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-[var(--color-border)]">
      <div className="order-3 md:order-1">
        <Column
          perspective="advantage"
          title={filecoin.title}
          features={filecoin.features}
          logo={filecoin.logo}
        />
      </div>
      <div className="order-2 py-10 md:hidden">
        <SectionDivider />
      </div>
      <div className="order-1 md:order-2">
        <Column
          perspective="disadvantage"
          title={traditionalCloud.title}
          features={traditionalCloud.features}
        />
      </div>
    </div>
  )
}
