const fs = require('fs')
const path = require('path')

const matter = require('gray-matter')

const tagsMapping = {
  'ai-productivity-and-utilities': 'AI Productivity and Utilities',
  'arts-collectibles': 'Arts & Collectibles',
  'bridges-oracles': 'Bridges & Oracles',
  climate: 'Climate',
  'communication-social': 'Communication & Social',
  dapp: 'DApp',
  'data-curation-monetization': 'Data Curation & Monetization',
  'data-prep': 'Data Preparation',
  'data-retrieval': 'Data Retrieval',
  'data-storage-management': 'Data Storage & Management',
  depin: 'Decentralized Personal Information Networks',
  desci: 'Decentralized Science',
  'developer-tools': 'Developer Tools',
  dweb: 'DWeb',
  enterprise: 'Enterprise',
  gaming: 'Gaming',
  glam: 'GLAM (Galleries, Libraries, Archives, Museums)',
  'governance-daos-public-goods': 'Governance, DAOs, & Public Goods',
  gpus: 'GPUs',
  health: 'Health',
  infrastructure: 'Infrastructure',
  'leasing-and-staking': 'Leasing & Staking',
  metaverse: 'Metaverse',
  'network-tools': 'Network Tools',
  nfts: 'NFTs',
  'photo-video': 'Photo & Video',
  'privacy-security': 'Privacy & Security',
  'public-data': 'Public Data',
  'publishing-news': 'Publishing & News',
  rss: 'RSS',
  's3-apis': 'S3 APIs',
  sealing: 'Sealing',
  'social-impact': 'Social Impact',
  space: 'Space',
  'storage-infrastructure': 'Storage Infrastructure',
  'storage-provider': 'Storage Provider',
  'storage-services': 'Storage Services',
  'storage-software': 'Storage Software',
  universities: 'Universities',
  'wallets-identity-authentication': 'Wallets, Identity & Authentication',
}

const topicsMapping = {
  'artificial-intelligence': 'Artificial Intelligence',
  'education-academia-health': 'Education, Academia & Health',
  finance: 'Finance',
  'media-entertainment': 'Media & Entertainment',
  network: 'Network',
  'public-goods-dweb': 'Public Goods & DWeb',
  'science-climate-space': 'Science, Climate & Space',
  storage: 'Storage',
  'tooling-productivity': 'Tooling & Productivity',
}

const directoryPath = path.join(process.cwd(), 'src', 'content', 'ecosystem')

const updateFile = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const parsedContent = matter(fileContent)

  if (parsedContent.data.f_tag && Array.isArray(parsedContent.data.f_tag)) {
    parsedContent.data.f_tag = parsedContent.data.f_tag.map((tagValue) => {
      const tagObject = {
        value: tagValue,
        label: tagsMapping[tagValue] || tagValue,
      }

      return JSON.parse(JSON.stringify(tagObject))
    })
  }

  if (
    parsedContent.data.f_topic &&
    typeof parsedContent.data.f_topic === 'string'
  ) {
    const topicValue = parsedContent.data.f_topic
    const topicObject = {
      value: topicValue,
      label: topicsMapping[topicValue] || topicValue,
    }

    parsedContent.data.f_topic = JSON.parse(JSON.stringify(topicObject))
  }

  const updatedContent = matter.stringify(
    parsedContent.content,
    parsedContent.data
  )
  fs.writeFileSync(filePath, updatedContent)
}
