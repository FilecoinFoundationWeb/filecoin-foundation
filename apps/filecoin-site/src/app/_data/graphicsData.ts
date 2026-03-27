import type { StaticImageProps } from '@filecoin-foundation/utils/types/imageType'

import astronautHelmet from '@/assets/graphics/astronaut-helmet.webp'
import classicLibraryInterior from '@/assets/graphics/classic-library-interior.webp'
import colorfulNebula from '@/assets/graphics/colorful-nebula.webp'
import cupolaEarthView from '@/assets/graphics/cupola-earth-view.webp'
import dataCenterServerRow from '@/assets/graphics/data-center-server-row.webp'
import digitalMediaConversionSetup from '@/assets/graphics/digital-media-conversion-setup.webp'
import earthAtNight from '@/assets/graphics/earth-at-night.webp'
import earthBlueEdge from '@/assets/graphics/earth-blue-edge.webp'
import earthFromDeepSpace from '@/assets/graphics/earth-from-deep-space.webp'
import filecoinMiningRig from '@/assets/graphics/filecoin-mining-rig.webp'
import filecoinServerRack from '@/assets/graphics/filecoin-server-rack.webp'
import filecoinStorageDevice from '@/assets/graphics/filecoin-storage-device.webp'
import howDataMovesThroughFilecoinCn from '@/assets/graphics/how-data-moves-through-filecoin-cn.webp'
import howDataMovesThroughFilecoin from '@/assets/graphics/how-data-moves-through-filecoin.webp'
import imageFallback from '@/assets/graphics/image-fallback.webp'
import IPFSIllustration from '@/assets/graphics/IPFS-illustration.webp'
import nasaHubbleSpaceTelescope from '@/assets/graphics/nasa-hubble-space-telescope.webp'
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
  classicLibraryInterior: {
    data: classicLibraryInterior,
    alt: 'Interior of a grand historic library with high vaulted wooden ceiling, rows of tall bookshelves, and marble busts lining the hall.',
  },
  colorfulNebula: {
    data: colorfulNebula,
    alt: 'A vibrant, colorful nebula in deep space, glowing with shades of purple, pink, green, and gold against a dark star-filled background.',
  },
  cupolaEarthView: {
    data: cupolaEarthView,
    alt: 'View of the Earth from the cupola of the International Space Station, showing the planet and the stars.',
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
  earthFromDeepSpace: {
    data: earthFromDeepSpace,
    alt: 'Earth from deep space, showing the planet and the stars.',
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
  howDataMovesThroughFilecoin: {
    data: howDataMovesThroughFilecoin,
    alt: 'Diagram showing how data moves through the Filecoin network. A circular flow surrounds a globe representing the global network. On the left, a user icon labeled “User stores data” explains that users upload data to Filecoin using storage tools or services, which create storage deals with Storage Providers. Below, Storage Providers are shown committing these deals to the Filecoin blockchain; the diagram notes that the blockchain stores only the record of the deal, not the data itself. At the bottom, the Filecoin logo represents the blockchain, where Storage Providers regularly submit cryptographic storage proofs to verify they are correctly storing user data. On the right, a section labeled “Retrieval clients” explains that storage solutions or retrieval clients fetch data directly from Storage Providers. At the top right, another user icon labeled “User retrieves data” indicates that users can retrieve their stored data using a tool or storage solution of their choice. The overall graphic illustrates a decentralized, global data storage and retrieval process coordinated through Filecoin.',
  },
  howDataMovesThroughFilecoinCn: {
    data: howDataMovesThroughFilecoinCn,
    alt: '图示展示了数据在 Filecoin 网络中的流转方式。一个环形流程围绕着一个代表全球网络的地球。左侧，一个标有"用户存储数据"的用户图标说明用户通过存储工具或服务将数据上传到 Filecoin，这些工具或服务与存储提供商创建存储交易。下方展示了存储提供商将这些交易提交到 Filecoin 区块链；图中指出区块链仅存储交易记录，而非数据本身。底部，Filecoin 标志代表区块链，存储提供商定期提交加密存储证明，以验证其正确存储了用户数据。右侧，标有"检索客户端"的部分说明存储解决方案或检索客户端直接从存储提供商获取数据。右上方，另一个标有"用户检索数据"的用户图标表示用户可以使用其选择的工具或存储解决方案检索已存储的数据。整体图形展示了一个通过 Filecoin 协调的去中心化全球数据存储与检索流程。',
  },
  IPFSIllustration: {
    data: IPFSIllustration,
    alt: 'Illustration showing the IPFS cube logo in the center with Filecoin logos surrounding it.',
  },
  nasaHubbleSpaceTelescope: {
    data: nasaHubbleSpaceTelescope,
    alt: 'Image of the NASA Hubble Space Telescope in space, showing the telescope and the stars.',
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
