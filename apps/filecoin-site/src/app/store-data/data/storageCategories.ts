type StorageCategory = {
  name: string
  description: string
}

export const storageCategories: StorageCategory[] = [
  {
    name: 'S3-Compatible',
    description: 'S3-compatible APIs for easy storage integration.',
  },
  {
    name: 'NFT Storage',
    description: 'Store NFT assets and metadata permanently and verifiably.',
  },
  {
    name: 'Backup & Recovery',
    description:
      'Reliable, decentralized backup with flexible recovery options.',
  },
  {
    name: 'Archival',
    description: 'Long-term storage for large datasets or compliance needs.',
  },
  {
    name: 'Drag & Drop',
    description: 'Easily upload and manage files with no setup required.',
  },
]
