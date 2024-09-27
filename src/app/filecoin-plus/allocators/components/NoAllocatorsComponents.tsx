import { FIL_PLUS_URLS } from '@/constants/siteMetadata'

import { Button } from '@/components/Button'

export function NoAllocatorsComponent() {
  return (
    <div className="mx-auto space-y-6 text-center">
      <h2 className="text-xl font-bold">Allocator Data Unavailable</h2>
      <p className="max-w-readable">
        We’re having trouble fetching the allocator data. For the latest
        information, please check the Allocators list on the Filecoin Plus
        Registry.
      </p>
      <Button href={FIL_PLUS_URLS.allocators.site} variant="primary">
        Go To FIlecoin Plus Registry
      </Button>
    </div>
  )
}
