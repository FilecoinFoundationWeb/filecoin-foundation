type FilecoinStep = {
  step: 1 | 2 | 3 | 4 | 5
  title: string
  description: string
}

export const filecoinStorageFlow: FilecoinStep[] = [
  {
    step: 1,
    title: 'The data is prepared',
    description:
      'The journey begins when a storage client prepares data for the Filecoin network, where it searches for a suitable provider. Storage providers compete by offering space, price, and reliability. ',
  },
  {
    step: 2,
    title: 'A storage deal is made',
    description: 'Storage providers compete to offer space and price.',
  },
  {
    step: 3,
    title: 'The data is sent and stored',
    description:
      'The data is transferred to the chosen provider and stored across the decentralized Filecoin network.',
  },
  {
    step: 4,
    title: 'The data is watched over',
    description:
      'To prove it’s still safely stored, the provider must regularly submit cryptographic proofs that the data remains intact and available.',
  },
  {
    step: 5,
    title: 'The data stays safe and verifiable',
    description:
      'As long as proofs are valid, the data stays securely stored—unchanged, verifiable, and ready to be retrieved when needed.',
  },
] as const
