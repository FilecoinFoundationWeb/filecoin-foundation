import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

import buildpPageGradient from '@/assets/graphics/build-gradient.svg'
import caseStudies from '@/assets/graphics/case-studies.svg'
import classicLibraryInterior from '@/assets/graphics/classic-library-interior.webp'
import communityHero from '@/assets/graphics/community.svg'
import dataCenterServerRow from '@/assets/graphics/data-center-server-row.webp'
import diagram from '@/assets/graphics/diagram.webp'
import digitalMediaConversionSetup from '@/assets/graphics/digital-media-conversion-setup.webp'
import earthAtNight from '@/assets/graphics/earth-at-night.png'
import earthFromSpaceAtNight from '@/assets/graphics/earth-from-space-at-night.webp'
import filecoinMiningRig from '@/assets/graphics/filecoin-mining-rig.webp'
import filecoinServerRack from '@/assets/graphics/filecoin-server-rack.webp'
import filecoinStorageDevice from '@/assets/graphics/filecoin-storage-device.webp'
import homepageGradient from '@/assets/graphics/homepage-gradient.svg'
import imageFallback from '@/assets/graphics/image-fallback.webp'
import IPFSIllustration from '@/assets/graphics/IPFS-illustration.webp'
import planetsShadow from '@/assets/graphics/planets-shadow.svg'
import rocketLaunch from '@/assets/graphics/rocket-launch.webp'
import serverBladeChassis from '@/assets/graphics/server-blade-chassis.webp'
import starsSpinning from '@/assets/graphics/stars-spinning.webp'

export const graphicsData = {
  buildOnFilecoinGradient: {
    data: buildpPageGradient,
    alt: 'Gradient background for build on filecoin page',
  },
  buildOnFilecoinHero: {
    data: dataCenterServerRow,
    alt: 'Row of server racks in a modern data center with blue LED lighting',
  },
  buildOnFilecoinSection: {
    data: earthFromSpaceAtNight,
    alt: 'Earth viewed from space at night showing city lights and continents',
  },
  caseStudies: {
    data: caseStudies,
    alt: 'Case studies page hero image',
  },
  communityHero: {
    data: communityHero,
    alt: 'Community page hero image',
  },
  earthAtNight: {
    data: earthAtNight,
    alt: 'Earth at night with city lights and continents',
  },
  fallback: {
    data: imageFallback,
    alt: '',
  },
  homepageGradient: {
    data: homepageGradient,
    alt: 'Gradient background for homepage',
  },
  homepageIPFSIllustration: {
    data: IPFSIllustration,
    alt: 'Illustration showing the IPFS cube logo in the center with Filecoin logos surrounding it.',
  },
  learndiagramSection: {
    data: diagram,
    alt: 'Three concentric circles of decreasing size, outlined in black on a white background.',
  },
  learnHero: {
    data: filecoinServerRack,
    alt: 'Filecoin server rack with multiple blade servers and network connections',
  },
  learnLibrarySection: {
    data: classicLibraryInterior,
    alt: 'Classic library interior with wooden shelves and books',
  },
  planetsShadow: {
    data: planetsShadow,
    alt: 'Planets casting shadows on each other',
  },
  provideStorageHero: {
    data: filecoinMiningRig,
    alt: 'Filecoin mining rig with multiple graphics cards and cooling systems',
  },
  provideStorageSection: {
    data: serverBladeChassis,
    alt: 'Server blade chassis with turquoise lighting in a rack mount',
  },
  provideStorageSection2: {
    data: filecoinStorageDevice,
    alt: 'Filecoin storage device with hard drives and cooling fans',
  },
  rocketLaunch: {
    data: rocketLaunch,
    alt: 'A rocket launching into the sky with bright flames and smoke clouds rising from the launch pad, reflected in the water below.',
  },
  starsSpinning: {
    data: starsSpinning,
    alt: 'Stars spinning in space',
  },
  storeDataHero: {
    data: digitalMediaConversionSetup,
    alt: 'Digital media conversion setup with various equipment and cables',
  },
} as const satisfies Record<string, StaticImageProps>
