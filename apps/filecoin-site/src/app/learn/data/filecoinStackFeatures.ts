type FilecoinStackFeature = {
  title: string
  description: string
  href: string
}

export const filecoinStackFeatures: FilecoinStackFeature[] = [
  {
    title: 'Proof of Replication (PoRep)',
    description:
      'Proves a storage provider has created a unique, real copy of the data.',
    href: '#',
  },
  {
    title: 'Proof of Spacetime (PoSt)',
    description:
      'Verifies over time that the data is continuously being stored, ensuring long-term reliability.',
    href: '#',
  },
  {
    title: 'Piece Deal Proofs (PDP)',
    description:
      'Confirms that specific files are stored as promised, down to the byte.',
    href: '#',
  },
  {
    title: 'Filecoin Virtual Machine (FVM)',
    description:
      'Enables smart contracts and programmable logic directly on Filecoin’s storage layer.',
    href: '#',
  },
  {
    title: 'Filecoin Web Services (FWS)',
    description:
      'Developer-friendly APIs and services to make building on Filecoin fast and scalable.',
    href: '#',
  },
  {
    title: 'Filecoin Plus (Fil+)',
    description:
      'A social trust system that rewards useful, verifiable data with storage incentives.',
    href: '#',
  },
] as const
