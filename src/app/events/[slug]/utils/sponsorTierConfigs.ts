import { buildImageSizeProp } from '@/utils/buildImageSizeProp'

export type SponsorTierConfig = {
  tier: 'firstTier' | 'secondTier' | 'thirdTier'
  gap: string
  logoImageConfig: {
    containerStyles: string
    imageSizes: string
  }
}

export const sponsorTierConfigs: Array<SponsorTierConfig> = [
  {
    tier: 'firstTier',
    gap: 'gap-8 sm:gap-20',
    logoImageConfig: {
      containerStyles: 'h-16 w-44 sm:h-20',
      imageSizes: buildImageSizeProp({ startSize: '140px', sm: '180px' }),
    },
  },
  {
    tier: 'secondTier',
    gap: 'gap-6 sm:gap-16',
    logoImageConfig: {
      containerStyles: 'h-10 w-36 sm:h-16',
      imageSizes: buildImageSizeProp({ startSize: '100px', sm: '140px' }),
    },
  },
  {
    tier: 'thirdTier',
    gap: 'gap-6 sm:gap-10',
    logoImageConfig: {
      containerStyles: 'h-7 w-24 sm:h-11',
      imageSizes: buildImageSizeProp({ startSize: '60px', sm: '100px' }),
    },
  },
] as const
