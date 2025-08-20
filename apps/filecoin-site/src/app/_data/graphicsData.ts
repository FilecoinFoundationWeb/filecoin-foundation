import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

import buildpPageGradient from '@/assets/graphics/build-gradient.svg'
import caseStudiesGradient from '@/assets/graphics/case-studies-gradient.svg'
import classicLibraryInterior from '@/assets/graphics/classic-library-interior.webp'
import communityGradient from '@/assets/graphics/community-gradient.svg'
import dataCenterServerRow from '@/assets/graphics/data-center-server-row.webp'
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
    alt: '',
  },
  buildOnFilecoinHero: {
    data: dataCenterServerRow,
    alt: 'Row of black server towers with glowing blue Filecoin logos in a dark data center.',
  },
  buildOnFilecoinSection: {
    data: earthFromSpaceAtNight,
    alt: 'Satellite view of Earth at night with illuminated cities and glowing networks of lights.',
  },
  caseStudies: {
    data: caseStudiesGradient,
    alt: '',
  },
  communityHero: {
    data: communityGradient,
    alt: '',
  },
  earthAtNight: {
    data: earthAtNight,
    alt: 'View of Earth’s curved horizon from space, with a soft blue atmospheric glow.',
  },
  fallback: {
    data: imageFallback,
    alt: 'Image coming soon',
  },
  homepageGradient: {
    data: homepageGradient,
    alt: '',
  },
  homepageIPFSIllustration: {
    data: IPFSIllustration,
    alt: 'Illustration showing the IPFS cube logo in the center with Filecoin logos surrounding it.',
  },
  learnHero: {
    data: filecoinServerRack,
    alt: 'Filecoin-branded blue server racks with one open unit revealing rows of storage drives.',
  },
  learnLibrarySection: {
    data: classicLibraryInterior,
    alt: 'Interior of a grand historic library with high vaulted wooden ceiling, rows of tall bookshelves, and marble busts lining the hall.',
  },
  planetsShadow: {
    data: planetsShadow,
    alt: '',
  },
  provideStorageHero: {
    data: filecoinMiningRig,
    alt: 'Blue Filecoin mining rig with scattered and stacked Filecoin-branded coins on the floor.',
  },
  provideStorageSection: {
    data: serverBladeChassis,
    alt: 'Front view of a server blade chassis with multiple slots, each marked with glowing Filecoin logos.',
  },
  provideStorageSection2: {
    data: filecoinStorageDevice,
    alt: 'Black storage device with Filecoin logo and glowing green indicator lights.',
  },
  rocketLaunch: {
    data: rocketLaunch,
    alt: 'A rocket launching into the sky with bright flames and smoke clouds rising from the launch pad, reflected in the water below.',
  },
  starsSpinning: {
    data: starsSpinning,
    alt: 'Long-exposure photograph of the night sky showing star trails swirling in circular motion.',
  },
  storeDataHero: {
    data: digitalMediaConversionSetup,
    alt: 'Collection of digital and analog media formats including VHS tapes, cassettes, CDs, USB drive, film reels, and photographs.',
  },
} as const satisfies Record<string, StaticImageProps>
