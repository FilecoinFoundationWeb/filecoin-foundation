type SpecializedInfrastructureSpec = {
  title: string
  list: string[]
}

export const specializedInfrastructureSpecs: SpecializedInfrastructureSpec[] = [
  {
    title: 'Sealing Node (GPU)',
    list: [
      'GPU: NVIDIA RTX 3090+ (24 GB VRAM)',
      'CPU: 24-core',
      'RAM: 512 GB',
      'Storage: 16 TB NVMe SSD',
      'NIC: 10 Gbit/s',
    ],
  },
  {
    title: 'Storage System (JBOD)',
    list: [
      'Capacity: At least 1 PiB',
      'Drives: SATA or SAS HDDs',
      'NIC: 10 Gbit/s',
    ],
  },
] as const
