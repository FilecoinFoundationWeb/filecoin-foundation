import {
  filecoin,
  traditionalCloud,
} from '../../data/filecoinVsCloudComparison'

import { Column } from './Column'

export function ComparisonTable() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <Column
        perspective="advantage"
        title={filecoin.title}
        features={filecoin.features}
        logo={filecoin.logo}
      />

      <Column
        perspective="disadvantage"
        title={traditionalCloud.title}
        features={traditionalCloud.features}
      />
    </div>
  )
}
