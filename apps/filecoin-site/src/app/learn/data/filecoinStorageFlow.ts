type FilecoinStep = {
  description: string
}

export const filecoinStorageFlow: FilecoinStep[] = [
  {
    description:
      'You upload your file to a dApp or storage client that interacts with the Filecoin network.',
  },
  {
    description: 'Storage providers compete to offer space and price.',
  },
  {
    description: 'A deal is made, and the file is stored across the network.',
  },
  {
    description:
      'Cryptographic proofs ensure that the file remains available and unchanged.',
  },
] as const
