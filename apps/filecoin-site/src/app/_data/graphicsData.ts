import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

import astronautHelmet from '@/assets/graphics/astronaut-helmet.webp'
import buildOnFilecoinGradient from '@/assets/graphics/build-gradient.svg'
import caseStudiesGradient from '@/assets/graphics/case-studies-gradient.svg'
import classicLibraryInterior from '@/assets/graphics/classic-library-interior.webp'
import dataCenterServerRow from '@/assets/graphics/data-center-server-row.webp'
import digitalMediaConversionSetup from '@/assets/graphics/digital-media-conversion-setup.webp'
import earthAtNight from '@/assets/graphics/earth-at-night.webp'
import earthBlueEdge from '@/assets/graphics/earth-blue-edge.webp'
import filecoinMiningRig from '@/assets/graphics/filecoin-mining-rig.webp'
import filecoinServerRack from '@/assets/graphics/filecoin-server-rack.webp'
import filecoinStorageDevice from '@/assets/graphics/filecoin-storage-device.webp'
import homepageGradient from '@/assets/graphics/homepage-gradient.svg'
import imageFallback from '@/assets/graphics/image-fallback.webp'
import IPFSIllustration from '@/assets/graphics/IPFS-illustration.webp'
import planetsShadow from '@/assets/graphics/planets-shadow.svg'
import rocketLaunch from '@/assets/graphics/rocket-launch.webp'
import serverBladeChassis from '@/assets/graphics/server-blade-chassis.webp'
import solarEclipse from '@/assets/graphics/solar-eclipse.webp'
import spiralGalaxyStarsSpace from '@/assets/graphics/spiral-galaxy-stars-space.webp'
import starsSpinning from '@/assets/graphics/stars-spinning.webp'

export const graphicsData = {
  astronautHelmet: {
    data: astronautHelmet,
    alt: 'Close-up of an astronaut’s helmet during a spacewalk, with the reflection showing Earth and parts of the spacecraft.',
  },
  buildOnFilecoinGradient: {
    data: buildOnFilecoinGradient,
    alt: '',
  },
  caseStudiesGradient: {
    data: caseStudiesGradient,
    alt: '',
  },
  classicLibraryInterior: {
    data: classicLibraryInterior,
    alt: 'Interior of a grand historic library with high vaulted wooden ceiling, rows of tall bookshelves, and marble busts lining the hall.',
  },
  dataCenterServerRow: {
    data: dataCenterServerRow,
    alt: 'Row of black server towers with glowing blue Filecoin logos in a dark data center.',
  },
  digitalMediaConversionSetup: {
    data: digitalMediaConversionSetup,
    alt: 'Collection of digital and analog media formats including VHS tapes, cassettes, CDs, USB drive, film reels, and photographs.',
  },
  earthAtNight: {
    data: earthAtNight,
    alt: 'Earth at night from space, showing city lights and the curve of the planet.',
  },
  earthBlueEdge: {
    data: earthBlueEdge,
    alt: 'Earth’s thin blue atmosphere viewed from space against the blackness of space.',
  },
  fallback: {
    data: imageFallback,
    alt: 'Image coming soon',
  },
  filecoinMiningRig: {
    data: filecoinMiningRig,
    alt: 'Blue Filecoin mining rig with scattered and stacked Filecoin-branded coins on the floor.',
  },
  filecoinServerRack: {
    data: filecoinServerRack,
    alt: 'Filecoin-branded blue server racks with one open unit revealing rows of storage drives.',
  },
  filecoinStorageDevice: {
    data: filecoinStorageDevice,
    alt: 'Black storage device with Filecoin logo and glowing green indicator lights.',
  },
  homepageGradient: {
    data: homepageGradient,
    alt: '',
  },
  IPFSIllustration: {
    data: IPFSIllustration,
    alt: 'Illustration showing the IPFS cube logo in the center with Filecoin logos surrounding it.',
  },
  planetsShadow: {
    data: planetsShadow,
    alt: '',
  },
  rocketLaunch: {
    data: rocketLaunch,
    alt: 'A rocket launching into the sky with bright flames and smoke clouds rising from the launch pad, reflected in the water below.',
  },
  serverBladeChassis: {
    data: serverBladeChassis,
    alt: 'Front view of a server blade chassis with multiple slots, each marked with glowing Filecoin logos.',
  },
  solarEclipse: {
    data: solarEclipse,
    alt: 'Solar eclipse with the sun forming a bright diamond ring behind the moon.',
  },
  spiralGalaxyStarsSpace: {
    data: spiralGalaxyStarsSpace,
    alt: 'A detailed view of a spiral galaxy with bright stars, glowing nebulae, and swirling blue and golden star fields in deep space.',
  },
  starsSpinning: {
    data: starsSpinning,
    alt: 'Long-exposure photograph of the night sky showing star trails swirling in circular motion.',
  },
} as const satisfies Record<string, StaticImageProps>
