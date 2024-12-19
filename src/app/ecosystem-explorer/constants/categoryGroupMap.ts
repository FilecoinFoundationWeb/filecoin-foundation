const ARTIFICIAL_INTELLIGENCE = 'Artificial Intelligence'
const EDUCATION_ACADEMIA_HEALTH = 'Education, Academia & Health'
const FINANCE = 'Finance'
const MEDIA_ENTERTAINMENT = 'Media & Entertainment'
const NETWORK = 'Network'
const PUBLIC_GOODS_DWEB = 'Public Goods & DWeb'
const SCIENCE_CLIMATE_SPACE = 'Science, Climate & Space'
const STORAGE = 'Storage'
const TOOLING_PRODUCTIVITY = 'Tooling & Productivity'

export const categoryGroupMap = new Map([
  ['ai-productivity-utilities', ARTIFICIAL_INTELLIGENCE],
  ['health', EDUCATION_ACADEMIA_HEALTH],
  ['leasing', FINANCE],
  ['arts-collectibles-nfts', MEDIA_ENTERTAINMENT],
  ['photo-video', MEDIA_ENTERTAINMENT],
  ['network-tools', NETWORK],
  ['dweb', PUBLIC_GOODS_DWEB],
  ['governance-daos-public-goods', PUBLIC_GOODS_DWEB],
  ['social-impact', PUBLIC_GOODS_DWEB],
  ['climate', SCIENCE_CLIMATE_SPACE],
  ['space', SCIENCE_CLIMATE_SPACE],
  ['decentralized-science', SCIENCE_CLIMATE_SPACE],
  ['data-storage-management', STORAGE],
  ['storage-provider', STORAGE],
  ['storage-services', STORAGE],
  ['storage-software', STORAGE],
  ['infrastructure', STORAGE],
  ['data-retrieval', TOOLING_PRODUCTIVITY],
  ['developer-tools', TOOLING_PRODUCTIVITY],
  ['dapp', TOOLING_PRODUCTIVITY],
  ['wallets-identity-authentication', TOOLING_PRODUCTIVITY],
  ['bridges-oracles', TOOLING_PRODUCTIVITY],
])
