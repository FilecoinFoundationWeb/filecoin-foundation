type CoreInfrastructureSpec = {
  title: string
  list: string[]
}

export const coreInfrastructureSpecs: CoreInfrastructureSpec[] = [
  {
    title: 'Networking',
    list: [
      'WAN: 1 Gbit/s or higher with a static public IP',
      'LAN: 10 Gbit/s or higher internal networking',
    ],
  },
  {
    title: 'CPU Nodes (x2)',
    list: [
      'CPU: 64-core',
      'RAM: 512 GB',
      'Storage: 8 TB NVMe SSD',
      'NIC: 10 Gbit/s',
    ],
  },
] as const
