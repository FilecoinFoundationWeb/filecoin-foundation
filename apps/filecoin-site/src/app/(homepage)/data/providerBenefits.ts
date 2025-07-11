type ProviderBenefit = {
  title: string
  description: string
}

export const providerBenefits: ProviderBenefit[] = [
  {
    title: 'Tap into global demand',
    description:
      'Connect with global clients seeking blockchain-based, permissionless storage — powering AI, crypto innovation, media organizations, scientific research, and more.',
  },
  {
    title: 'Diversify revenue streams',
    description:
      'Earn from both storage and retrieval deals — turning idle capacity and hardware into income in an ecosystem built for the future.',
  },
  {
    title: 'Scale on your terms',
    description:
      'Start with existing hardware and scale as demand grows. Expand capacity, offer new services, and evolve alongside a global network.',
  },
] as const
