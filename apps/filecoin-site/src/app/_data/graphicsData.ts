import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

import ClassicLibraryInterior from '@/assets/graphics/classic-library-interior.webp'
import DataCenterServerRow from '@/assets/graphics/data-center-server-row.webp'
import Diagram from '@/assets/graphics/diagram.webp'
import DigitalMediaConversionSetup from '@/assets/graphics/digital-media-conversion-setup.webp'
import EarthFromSpaceAtNight from '@/assets/graphics/earth-from-space-at-night.webp'
import EarthGlobe from '@/assets/graphics/earth-globe.webp'
import FilecoinMiningRig from '@/assets/graphics/filecoin-mining-rig.webp'
import FilecoinServerRack from '@/assets/graphics/filecoin-server-rack.webp'
import FilecoinStorageDevice from '@/assets/graphics/filecoin-storage-device.webp'
import HomepageGradient from '@/assets/graphics/homepage-gradient.svg'
import ServerBladeChassis from '@/assets/graphics/server-blade-chassis.webp'
import BuildpageGradient from '@/assets/graphics/build-gradient.svg'

export const graphicsData = {
  homepageGradient: {
    data: HomepageGradient,
    alt: 'Gradient background for homepage',
  },
  buildOnFilecoinHero: {
    data: DataCenterServerRow,
    alt: 'Row of server racks in a modern data center with blue LED lighting',
  },
  buildOnFilecoinGradient: {
    data: BuildpageGradient,
    alt: 'Gradient background for build on filecoin page',
  },
  buildOnFilecoinSection: {
    data: EarthFromSpaceAtNight,
    alt: 'Earth viewed from space at night showing city lights and continents',
  },
  homepageHero: {
    data: EarthGlobe,
    alt: 'Minimalist Earth globe with clean geometric design and network connections',
  },

  learnHero: {
    data: FilecoinServerRack,
    alt: 'Filecoin server rack with multiple blade servers and network connections',
  },
  learnLibrarySection: {
    data: ClassicLibraryInterior,
    alt: 'Classic library interior with wooden shelves and books',
  },
  learnDiagramSection: {
    data: Diagram,
    alt: 'Three concentric circles of decreasing size, outlined in black on a white background.',
  },
  provideStorageHero: {
    data: FilecoinMiningRig,
    alt: 'Filecoin mining rig with multiple graphics cards and cooling systems',
  },
  provideStorageSection: {
    data: ServerBladeChassis,
    alt: 'Server blade chassis with turquoise lighting in a rack mount',
  },
  provideStorageSection2: {
    data: FilecoinStorageDevice,
    alt: 'Filecoin storage device with hard drives and cooling fans',
  },
  storeDataHero: {
    data: DigitalMediaConversionSetup,
    alt: 'Digital media conversion setup with various equipment and cables',
  },
} as const satisfies Record<string, StaticImageProps>
