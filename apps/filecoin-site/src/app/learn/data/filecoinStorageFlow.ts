type FilecoinStep = {
  step: 1 | 2 | 3 | 4 | 5 | 6
  title: string
  description: string
}

export const filecoinStorageFlow: FilecoinStep[] = [
  {
    step: 1,
    title: 'The data is prepared',
    description:
      'A client wants to store data on the Filecoin network and defines their storage requirements—space needed, duration, and price.',
  },
  {
    step: 2,
    title: 'Finding a storage solution',
    description:
      'The client either picks a provider directly or uses a service that connects them to one. Providers compete based on price, storage space, and reliability. The client selects the option that best fits their needs.',
  },
  {
    step: 3,
    title: 'A storage deal is made',
    description:
      'A formal storage deal is recorded on the Filecoin blockchain. The agreement is now immutable and transparent.',
  },
  {
    step: 4,
    title: 'The data is transferred and stored',
    description:
      'The data is transferred to the storage provider and distributed across the decentralized network.',
  },
  {
    step: 5,
    title: 'Filecoin proofs',
    description:
      'To earn Filecoin, storage providers must submit cryptographic proofs that show the data remains available and intact and available.',
  },
  {
    step: 6,
    title: 'The data stays safe and verifiable',
    description:
      'For the duration of the storage deal, the data stays securely stored—unchanged, verifiable, and ready for retrieval.',
  },
] as const
