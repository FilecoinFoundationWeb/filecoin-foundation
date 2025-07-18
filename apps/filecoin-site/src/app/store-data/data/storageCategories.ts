export type StorageKey = (typeof storageCategories)[number]['id']

export const storageCategories = [
  {
    name: 'S3-Compatible',
    description: 'S3-compatible APIs for easy storage integration.',
    id: 's3-compatible',
  },
  {
    name: 'NFT Storage',
    description: 'Store NFT assets and metadata permanently and verifiably.',
    id: 'nft',
  },
  {
    name: 'Backup & Recovery',
    description:
      'Reliable, decentralized backup with flexible recovery options.',
    id: 'backup-recovery',
  },
  {
    name: 'Archival',
    description: 'Long-term storage for large datasets or compliance needs.',
    id: 'archival',
  },
  {
    name: 'Drag & Drop',
    description: 'Easily upload and manage files with no setup required.',
    id: 'drag-drop',
  },
] as const
