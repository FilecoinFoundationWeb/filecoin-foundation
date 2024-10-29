import * as Sentry from '@sentry/nextjs'

import { getAllocators } from '../utils/getAllocators'

import { AllocatorsTableWithFilters } from './AllocatorsTableWithFilters'
import { NoDataAvailableMessage } from './NoDataAvailableMessage'

const dummyData = [
  {
    name: 'CloudX Lab',
    metapathway_type: 'Automatic',
    location: 'China',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/CloudX-Lab/filecion',
    },
  },
  {
    name: 'FrogHub',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '3+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/FroghubMan/filplus',
    },
  },
  {
    name: 'Blockchain World FIL+ DC Allocator(BCWFDA)',
    metapathway_type: 'Manual',
    location: 'Korea',
    application: {
      required_sps: '4+',
      required_replicas: '4+',
      allocation_bookkeeping:
        'https://github.com/Blockchain-World-News/FIL-DC-Allocator',
    },
  },
  {
    name: 'Starlight (Enterprise Data Management System)',
    metapathway_type: 'Automatic',
    location: 'Singapore',
    application: {
      required_sps: '3+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/filplus-bookkeeping/Starlight-Enterprise-Data-Management-System',
    },
  },
  {
    name: 'IPFSTT',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/nicelove666/Allocator-Pathway-IPFSTT',
    },
  },
  {
    name: 'PiKNiK FIL+',
    metapathway_type: 'Manual',
    location: 'North America',
    application: {
      required_sps: '2+',
      required_replicas: '2+',
      allocation_bookkeeping:
        'https://github.com/filplus-bookkeeping/PiKNiK-FILplus',
    },
  },
  {
    name: 'ZCFIL+',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '4+',
      required_replicas: '4+',
      allocation_bookkeeping: 'https://github.com/zcfil/ZCFIL',
    },
  },
  {
    name: 'DAYOU',
    metapathway_type: 'Manual',
    location: 'Hong Kong',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/filplus-bookkeeping/DAYOU',
    },
  },
  {
    name: 'Future Storage',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/Origin-Storage-IO/future-storage',
    },
  },
  {
    name: 'Top Value Storage',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/TVLimited/top-value-storage',
    },
  },
  {
    name: 'LendMi Storage',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/LendMi-Finance/LendMi-Storage',
    },
  },
  {
    name: 'Bitengine Reeta FIL+',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/filplus-bookkeeping/Bitengine-Reeta-Filplus',
    },
  },
  {
    name: 'Pluskit',
    metapathway_type: 'Manual',
    location: 'Hong Kong',
    application: {
      required_sps: '4+',
      required_replicas: '3+',
      allocation_bookkeeping: 'https://github.com/PluskitOfficial/bookkeeping',
    },
  },
  {
    name: 'Waterdrop Lab',
    metapathway_type: 'Automatic',
    location: 'Hong Kong',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/amiclan666/WaterdropLab',
    },
  },
  {
    name: 'Genesis',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/Chuangshi1/Genesis',
    },
  },
  {
    name: 'OpenGate Datacap Allocator',
    metapathway_type: 'Manual',
    location: 'Australia',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/OpenGate01/Allocator-Pathway-OpenGate01',
    },
  },
  {
    name: 'NonEntropy',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '4+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/joshua-ne/FIL_DC_Allocator_1022',
    },
  },
  {
    name: 'Fatman13 (FIP-0078 Pathway)',
    metapathway_type: 'Automatic',
    location: 'China',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/py-guazi/GZ-FIP0078-Pathway',
    },
  },
  {
    name: 'EasyOnboard Allocator',
    metapathway_type: 'Automatic',
    location: 'North America',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: null,
    },
  },
  {
    name: 'Enterprise data - HK CyberPort pathway',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/NDLABS-Leo/Allocator-Pathway-Enterprise-data.git',
    },
  },
  {
    name: 'NDCloud',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/NDLABS-Leo/Allocator-Pathway-ND-CLOUD.git',
    },
  },
  {
    name: 'BDX Fil+ Allocator',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/cryptoAmandaL/BDE-Allocator',
    },
  },
  {
    name: 'SXX Future Data',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/sxxfuture-official/filplus-allocator-sxxfuture',
    },
  },
  {
    name: 'Media Platform Data',
    metapathway_type: 'Manual',
    location: 'Hong Kong',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/CockroachBoss/Allocator-MediaPlatformData',
    },
  },
  {
    name: 'Data Preparer Pathway',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '5+',
      required_replicas: '3+',
      allocation_bookkeeping:
        'https://github.com/filedrive-team/Filecoin-Plus-Pathway',
    },
  },
  {
    name: 'METAVERSEDATAMINING',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/filplus-bookkeeping/METAVERSEDATAMINING',
    },
  },
  {
    name: 'FilscanOfficial',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '2+',
      required_replicas: '2+',
      allocation_bookkeeping:
        'https://github.com/FilscanOfficial/filscan-backend',
    },
  },
  {
    name: 'IPFSForce',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/ipfsforcezuofu/ipfsforce-allocator',
    },
  },
  {
    name: 'Venus Fil+ Datacap Allocator (VFDA)',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '4+',
      required_replicas: '2+',
      allocation_bookkeeping: 'https://github.com/VenusOfficial/Pathway-VFDA',
    },
  },
  {
    name: 'STCloud',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/stcloudlisa/Allocator-Pathway-Data',
    },
  },
  {
    name: 'Destore',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/Destore2023/MetaPathways-Bookkeeping',
    },
  },
  {
    name: 'NewHuoPool',
    metapathway_type: 'Manual',
    location: 'North America',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/NewHuoPool/NewHuoPoolPathway',
    },
  },
  {
    name: 'Greaterheat',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '4+',
      required_replicas: '4+',
      allocation_bookkeeping:
        'https://github.com/AlanGreaterheat/Greaterheat-Allocator',
    },
  },
  {
    name: 'Tianji Studio Fil+',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/liyunzhi-666/TianjiStudio-Fil',
    },
  },
  {
    name: 'FILWALLET',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/a1991car/Allocator-Public-Data',
    },
  },
  {
    name: 'DSPA Filecoin Pathway',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '4+',
      required_replicas: '4+',
      allocation_bookkeeping: 'https://github.com/pandacrypto/DSPA-Allocator',
    },
  },
  {
    name: 'TOP POOL',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/TOPPOOL-LEE/Allocator-Pathway-TOP-POOL',
    },
  },
  {
    name: 'E-Fil+',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/1475Notary/1475-Allocator',
    },
  },
  {
    name: 'Ehume',
    metapathway_type: 'Automatic',
    location: 'China',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/Ehume/Ehume',
    },
  },
  {
    name: 'Hash Big Data',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '4+',
      required_replicas: '4+',
      allocation_bookkeeping: 'https://github.com/hash889900/HashTeam',
    },
  },
  {
    name: 'Ant Steve',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '5+',
      required_replicas: '4+',
      allocation_bookkeeping: 'https://github.com/Antalpha-Web3/Ant-Steve',
    },
  },
  {
    name: 'DCENT Fil+',
    metapathway_type: 'Manual',
    location: 'Europe',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/cryptowhizzard/Fil-A-1',
    },
  },
  {
    name: 'RFfil',
    metapathway_type: 'Manual',
    location: 'Hong Kong',
    application: {
      required_sps: '3+',
      required_replicas: '3+',
      allocation_bookkeeping: 'https://github.com/MikeH1999/RFfil',
    },
  },
  {
    name: 'EF',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '4+',
      required_replicas: '4+',
      allocation_bookkeeping: 'https://github.com/Lind111/EF',
    },
  },
  {
    name: 'Marshall Fil+',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/Marshall-btc/Marshall-Fil-Data-Pathway',
    },
  },
  {
    name: 'Dcent - Fil+ - NC',
    metapathway_type: 'Manual',
    location: 'Europe',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/cryptowhizzard/Fil-A-2',
    },
  },
  {
    name: 'Herony',
    metapathway_type: 'Market-based',
    location: 'China',
    application: {
      required_sps: '3+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/herony-fil/herony-data-pathway',
    },
  },
  {
    name: 'Max',
    metapathway_type: 'Manual',
    location: 'Hong Kong',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/filplus-bookkeeping/Max-CoinSummer-Labs',
    },
  },
  {
    name: 'Caro Allocator',
    metapathway_type: 'Manual',
    location: 'Europe',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/Carohere/Caro-Allocator',
    },
  },
  {
    name: 'Max',
    metapathway_type: 'Manual',
    location: 'Hong Kong',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/filplus-bookkeeping/Max-MinerDAO',
    },
  },
  {
    name: 'web3mine AG',
    metapathway_type: 'Manual',
    location: 'Europe',
    application: {
      required_sps: '3+',
      required_replicas: '3+',
      allocation_bookkeeping:
        'https://github.com/filplus-bookkeeping/web3mine-AG',
    },
  },
  {
    name: 'Nebula Block',
    metapathway_type: 'Manual',
    location: 'North America',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/Nebula-Block-Data/Nebula-Block-Data-Pathway',
    },
  },
  {
    name: 'TopBlocks',
    metapathway_type: 'Manual',
    location: 'North America',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/TopBlocks/TopBlocks_Allocator',
    },
  },
  {
    name: 'Storify Data Fortress',
    metapathway_type: 'Manual',
    location: 'North America',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/Storify-LLC/Storify-Data-Pathway',
    },
  },
  {
    name: 'QC Data center',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '4+',
      required_replicas: '4+',
      allocation_bookkeeping: 'https://github.com/luhong123/QC-Data-center',
    },
  },
  {
    name: 'FBG Allocator',
    metapathway_type: 'Market-based',
    location: 'Singapore',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/filplus-bookkeeping/FBG-Allocator',
    },
  },
  {
    name: 'Patapon',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '4+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/filplus-bookkeeping/Patapon',
    },
  },
  {
    name: 'VSTAR',
    metapathway_type: 'Manual',
    location: 'Europe',
    application: {
      required_sps: '5+',
      required_replicas: '4+',
      allocation_bookkeeping: 'https://github.com/FIL-VSTAR/v5-notary',
    },
  },
  {
    name: 'Bitmain USA',
    metapathway_type: 'Manual',
    location: 'North America',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/filecoin-bitmain/file',
    },
  },
  {
    name: 'XnMatrix',
    metapathway_type: 'Manual',
    location: 'North America',
    application: {
      required_sps: '2+',
      required_replicas: '3+',
      allocation_bookkeeping: 'https://github.com/filplus-bookkeeping/XnMatrix',
    },
  },
  {
    name: 'RRM Global',
    metapathway_type: 'Manual',
    location: 'Hong Kong',
    application: {
      required_sps: '2+',
      required_replicas: '3+',
      allocation_bookkeeping: 'https://github.com/EthanLauWJ/RRM-Global',
    },
  },
  {
    name: 'New Web Group (E-Fil+)',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '4+',
      required_replicas: '4+',
      allocation_bookkeeping:
        'https://github.com/newwebgroup/Allocator-Pathway-New-Web-Group',
    },
  },
  {
    name: 'Niwan Pathway',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/NiwanDao/NiwanPathway',
    },
  },
  {
    name: 'Dataswap',
    metapathway_type: 'Automatic',
    location: 'China',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/dataswap',
    },
  },
  {
    name: 'Nandit Mehra',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '5+',
      required_replicas: '2+',
      allocation_bookkeeping:
        'https://github.com/filplus-bookkeeping/Nandit-Mehra-Lighthouse.Storage',
    },
  },
  {
    name: '(StorSwift) Manual',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/StorSwift-team/fil-allocator-bookkeeping',
    },
  },
  {
    name: 'IPFSCN',
    metapathway_type: 'Manual',
    location: 'China',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/filplus-bookkeeping/IPFSCN',
    },
  },
  {
    name: 'ANTPOOL Pathway',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '5+',
      required_replicas: '4+',
      allocation_bookkeeping:
        'https://github.com/filplus-bookkeeping/ANTPOOL-Pathway',
    },
  },
  {
    name: 'DeStor',
    metapathway_type: 'Manual',
    location: 'North America',
    application: {
      required_sps: '2+',
      required_replicas: '2+',
      allocation_bookkeeping: 'https://github.com/filplus-bookkeeping/DeStor',
    },
  },
  {
    name: 'Power Meta Corp',
    metapathway_type: 'Manual',
    location: 'North America',
    application: {
      required_sps: '2+',
      required_replicas: '3+',
      allocation_bookkeeping:
        'https://github.com/filplus-bookkeeping/Power-Meta-Corp',
    },
  },
  {
    name: 'ZetaCubeAllen',
    metapathway_type: 'Manual',
    location: 'Korea',
    application: {
      required_sps: '5+',
      required_replicas: '5+',
      allocation_bookkeeping:
        'https://github.com/ipfsAllen/Fil-DC-Allocator-Allen',
    },
  },
  {
    name: 'CIDgravity decentralized onboarding to the mix',
    metapathway_type: 'Automatic',
    location: 'Europe',
    application: {
      required_sps: '2+',
      required_replicas: '2+',
      allocation_bookkeeping:
        'https://github.com/CIDgravity/datacap-decentralized-onboarding-to-the-mix',
    },
  },
  {
    name: 'CIDgravity decentralized onboarding to self-selected SPs',
    metapathway_type: 'Automatic',
    location: 'Europe',
    application: {
      required_sps: '2+',
      required_replicas: '2+',
      allocation_bookkeeping:
        'https://github.com/CIDgravity/datacap-decentralized-onboarding-to-self-selected-sps',
    },
  },
  {
    name: 'CIDgravity data preparation and onboarding',
    metapathway_type: 'Automatic',
    location: 'Europe',
    application: {
      required_sps: '2+',
      required_replicas: '2+',
      allocation_bookkeeping:
        'https://github.com/CIDgravity/datacap-data-preparation-and-onboarding',
    },
  },
  {
    name: 'FF Social Impact',
    metapathway_type: 'Manual',
    location: 'North America',
    application: {
      required_sps: '2+',
      required_replicas: '2+',
      allocation_bookkeeping:
        'https://github.com/filplus-bookkeeping/FF-Social-Impact',
    },
  },
  {
    name: 'Titan Network',
    metapathway_type: 'Manual',
    location: 'Singapore',
    application: {
      required_sps: '5+',
      required_replicas: '3+',
      allocation_bookkeeping:
        'https://github.com/TitanNet/Allocator-Pathway-Titan-Network',
    },
  },
  {
    name: 'Deep Kapur',
    metapathway_type: 'Manual',
    location: 'North America',
    application: {
      required_sps: '3+',
      required_replicas: '5+',
      allocation_bookkeeping: 'https://github.com/filplus-bookkeeping/Flamenco',
    },
  },
  {
    name: 'Kernelogic Fil+ Datacap Allocator',
    metapathway_type: 'Automatic',
    location: 'North America',
    application: {
      required_sps: '2+',
      required_replicas: '2+',
      allocation_bookkeeping: null,
    },
  },
  {
    name: 'Bewell Technology Limited Fil+ Datacap Allocator (BWTDA)',
    metapathway_type: 'Manual',
    location: 'Hong Kong',
    application: {
      required_sps: '3+',
      required_replicas: '3+',
      allocation_bookkeeping:
        'https://github.com/filplus-bookkeeping/Bewell-Technology-Limited',
    },
  },
  {
    name: 'Public Open Dataset Pathway',
    metapathway_type: 'Manual',
    location: 'North America',
    application: {
      required_sps: '2+',
      required_replicas: '2+',
      allocation_bookkeeping: 'https://github.com/fidlabs/Open-Data-Pathway',
    },
  },
  {
    name: 'Enterprise Data Pathway',
    metapathway_type: 'Manual',
    location: 'North America',
    application: {
      required_sps: '2+',
      required_replicas: '2+',
      allocation_bookkeeping:
        'https://github.com/fidlabs/Enterprise-Data-Pathway/',
    },
  },
]

export async function AllocatorsTableSection() {
  return <AllocatorsTableWithFilters data={dummyData} />

  // try {
  //   const allocators = await getAllocators()

  //   if (!allocators.length) {
  //     return <NoDataAvailableMessage />
  //   }

  //   return <AllocatorsTableWithFilters />
  // } catch (error) {
  //   console.error('Error fetching or validating allocators:', error)

  //   Sentry.captureException(error, {
  //     tags: { component: 'AllocatorsTableSection' },
  //     extra: { message: 'Error fetching or validating allocators' },
  //   })

  //   return <NoDataAvailableMessage />
  // }
}
