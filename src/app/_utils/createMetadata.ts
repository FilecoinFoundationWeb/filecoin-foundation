interface Metadata {
  title?: string
  description?: string
}

export function createMetadata(title: string, description: string): Metadata {
  return {
    title: `${title} · Filecoin Foundation` || 'Filecoin Foundation',
    description:
      description ||
      'The Filecoin Foundation is a non-profit organization dedicated to building the Filecoin ecosystem and the decentralized web.',
  }
}
