export const redirects = [
  // PAGE REDIRECTS
  {
    source: '/admin',
    destination: '/admin/index.html',
    permanent: true,
  },
  {
    source: '/board',
    destination: '/about',
    permanent: true,
  },
  {
    source: '/careers',
    destination: '/about',
    permanent: true,
  },
  {
    source: '/community',
    destination: '/ecosystem-explorer',
    permanent: true,
  },
  {
    source: '/contact',
    destination: '/about',
    permanent: true,
  },
  {
    source: '/davos',
    destination: '/events/davos',
    permanent: true,
  },
  {
    source: '/davos-registration',
    destination: '/events/davos',
    permanent: true,
  },
  {
    source: '/ecosystem',
    destination: '/ecosystem-explorer/',
    permanent: true,
  },
  {
    source: '/ecosystem/%5C%22',
    destination: '/ecosystem-explorer',
    permanent: true,
  },
  {
    source: '/ecosystem-projects/:path*',
    destination: '/ecosystem-explorer/:path*',
    permanent: true,
  },
  {
    source: '/filaustin',
    destination: '/events/fil-austin',
    permanent: true,
  },
  {
    source: '/filplus',
    destination: '/filecoin-plus',
    permanent: true,
  },
  {
    source: '/filplus/%20%22Filecoin%20Plus%22',
    destination: '/filecoin-plus',
    permanent: true,
  },
  {
    source: '/fips',
    destination:
      '/blog/participating-in-the-filecoin-ecosystem-bounties-microgrants-and-fips',
    permanent: true,
  },
  {
    source: '/get-involved',
    destination: '/',
    permanent: true,
  },
  {
    source: '/governance/fips/:path*',
    destination: '/governance',
    permanent: true,
  },
  {
    source: '/governance/govhub',
    destination: '/governance',
    permanent: true,
  },
  {
    source: '/governance/proposing',
    destination: '/governance',
    permanent: true,
  },
  {
    source: '/philosophy',
    destination: '/about',
    permanent: true,
  },
  {
    source: '/policy',
    destination: '/privacy-policy',
    permanent: true,
  },
  {
    source: '/public-data',
    destination: '/',
    permanent: true,
  },
  {
    source: '/public-data/:path*',
    destination: '/',
    permanent: true,
  },
  {
    source: '/publicdata/awards',
    destination: '/grants',
    permanent: true,
  },
  {
    source: '/research/research-text.htm',
    destination: '/',
    permanent: true,
  },
  {
    source: '/team',
    destination: '/about',
    permanent: true,
  },
  {
    source: '/terms',
    destination: '/terms-of-use',
    permanent: true,
  },

  // BLOG POST REDIRECTS
  {
    source:
      '/blog/announcing-%E2%80%98watermelon%E2%80%99-nv21-upgrade-extended-sector-commitments-synthetic-porep-fvm-enhancements-and-more',
    destination:
      '/blog/announcing-watermelon-nv21-upgrade-extended-sector-commitments-synthetic-porep-fvm-enhancements-and-more',
    permanent: true,
  },
  {
    source: '/blog/deep-dive-on-messari%E2%80%99s-q1-filecoin-ecosystem-report',
    destination: '/blog/deep-dive-on-messaris-q1-filecoin-ecosystem-report',
    permanent: true,
  },
  {
    source:
      '/blog/democracy%E2%80%99s-library-announces-more-than-a-petabyte-of-government-data-uploaded-to-the-filecoin-network',
    destination:
      '/blog/democracys-library-announces-more-than-a-petabyte-of-government-data-uploaded-to-the-filecoin-network',
    permanent: true,
  },
  {
    source:
      '/blog/ecosystem-spotlight-ghostdrive%E2%80%99s-secure-decentralized-storage-now-on-mobile',
    destination:
      '/blog/ecosystem-spotlight-ghostdrives-secure-decentralized-storage-now-on-mobile',
    permanent: true,
  },
  {
    source: '/blog/filecoin-foundation-quarterly-report-october-2024',
    destination: '/blog/filecoin-foundation-quarterly-update-october-2024',
    permanent: true,
  },
  {
    source: '/blog/guest-post-if-the-library-of-alexandra-were-built-better',
    destination:
      '/blog/guest-post-if-the-library-of-alexandria-were-built-better',
    permanent: true,
  },
  {
    source:
      '/blog/pilecoin-foundation-successfully-deploys-interflanetary-pile-system-IFPS-in-space',
    destination:
      '/blog/filecoin-foundation-successfully-deploys-interplanetary-file-system-ipfs-in-space',
    permanent: true,
  },
  {
    source:
      '/blog/what%E2%80%99s-new-with-the-filecoin-plus-notary-election-and-filecoin-day-highlights-from-labweek23',
    destination:
      '/blog/whats-new-with-the-filecoin-plus-notary-election-and-filecoin-day-highlights-from-labweek23',
    permanent: true,
  },

  // ECOSYSTEM PROJECTS REDIRECTS
  {
    source: '/ecosystem/project/artifact-labs',
    destination: '/ecosystem-explorer',
    permanent: true,
  },
  {
    source: '/ecosystem/project/bela-supernova',
    destination:
      '/blog/bela-supernova-awarded-chainlink-filecoin-joint-grant-to-support-public-health-data-oracle',
    permanent: true,
  },
  {
    source: '/ecosystem-explorer/bildo',
    destination: '/ecosystem-explorer/bidlo',
    permanent: true,
  },
  {
    source: '/ecosystem-explorer/catalyst',
    destination: '/ecosystem-explorer',
    permanent: true,
  },
  {
    source: '/ecosystem-explorer/cooperdb',
    destination: '/ecosystem-explorer',
    permanent: true,
  },
  {
    source: '/ecosystem/project/cryptalk',
    destination: '/ecosystem-explorer',
    permanent: true,
  },
  {
    source: '/ecosystem/project/datahaus',
    destination: '/ecosystem-explorer',
    permanent: true,
  },
  {
    source: '/ecosystem-explorer/e-ipfs',
    destination: '/ecosystem-explorer',
    permanent: true,
  },
  {
    source: '/ecosystem-explorer/elastic',
    destination: '/ecosystem-explorer',
    permanent: true,
  },
  {
    source: '/ecosystem-explorer/encryption-pinner',
    destination: '/ecosystem-explorer',
    permanent: true,
  },
  {
    source: '/ecosystem/muckrock',
    destination: '/ecosystem-explorer/muckrock',
    permanent: true,
  },
  {
    source: '/ecosystem-explorer/3pad',
    destination: '/ecosystem-explorer',
    permanent: true,
  },
  {
    source: '/ecosystem-explorer/solmedia',
    destination: '/ecosystem-explorer',
    permanent: true,
  },
  {
    source: '/ecosystem-explorer/stfil',
    destination: '/ecosystem-explorer',
    permanent: true,
  },

  // EVENTS REDIRECTS
  {
    source: '/events/decentralized-web-gateway-davos',
    destination: '/events/davos-2022',
    permanent: true,
  },
  {
    source: '/events/dweb-camp-1',
    destination: '/events/dweb-camp-2023',
    permanent: true,
  },
  {
    source: '/events/dweb-camp-2024',
    destination: '/events/dweb-camp',
    permanent: true,
  },
  {
    source: '/events/fil-bangkok',
    destination: '/events/fil-bangkok-2024',
    permanent: true,
  },
  {
    source: '/events/fil-bangkok-network-base-with-fil-dev-summit',
    destination: '/events/fil-bangkok-2024',
    permanent: true,
  },
  {
    source: '/events/fil-dev-summit-1',
    destination: '/events/fil-dev-summit-singapore-2023',
    permanent: true,
  },
  {
    source: '/events/fil-dev-summit-5-labweek',
    destination: '/events/fil-bangkok-2024',
    permanent: true,
  },
  {
    source: '/events/fil-dev-summit-canada',
    destination: '/events/fil-dev-summit',
    permanent: true,
  },
  {
    source: '/events/fil-dev-summit-iceland-2023',
    destination: '/events/fil-dev-summit-2-iceland',
    permanent: true,
  },
  {
    source: '/events/fil-dev-summit-singapore',
    destination: '/events/fil-dev-summit-singapore-2023',
    permanent: true,
  },
  {
    source: '/events/fil-dev-summit-singapore-2023',
    destination: '/events/fil-dev-summit-1-singapore',
    permanent: true,
  },
  {
    source: '/events/the-filecoin-penthouse-davos-2024',
    destination: '/events/davos',
    // With Davos 2026, this should point to '/events/the-filecoin-penthouse-davos-2025',
    permanent: true,
  },
  {
    source: '/events/the-filecoin-sanctuary-davos',
    destination: '/events/davos-2023',
    permanent: true,
  },
  {
    source: '/events/the-filecoin-sanctuary-davos-2024',
    destination: '/events/davos-2024',
    permanent: true,
  },
  {
    source: '/events/vision-weekend-us',
    destination: '/events/vision-weekend-2022',
    permanent: true,
  },
  {
    source: '/events/vision-weekend-usa-2023',
    destination: '/events/vision-weekend-2023',
    permanent: true,
  },
  {
    source: '/events/vision-weekend-usa-2024',
    destination: '/events/vision-weekend',
    // With Vision Weekend 2025, this should point to '/events/vision-weekend-2024',
    permanent: true,
  },

  // IMAGE REDIRECTS
  {
    source: '/assets/images/benjamin-hung.png',
    destination: '/',
    permanent: true,
  },
  {
    source: '/assets/images/bold-baatar.png',
    destination: '/',
    permanent: true,
  },
  {
    source: '/assets/images/brian-lau-sinso.png',
    destination: '/',
    permanent: true,
  },
  {
    source: '/assets/images/frame-7.png',
    destination: '/',
    permanent: true,
  },
  {
    source: '/assets/images/simon-cooper.png',
    destination: '/',
    permanent: true,
  },
  {
    source: '/assets/images/yann-lecun.png',
    destination: '/',
    permanent: true,
  },
  {
    source: '/assets/svg/bg-index.svg',
    destination: '/',
    permanent: true,
  },
  {
    source: '/assets/svg/logo.svg',
    destination: '/assets/images/logo.svg',
    permanent: true,
  },
  {
    source: '/symbol-defs.svg',
    destination: '/',
    permanent: true,
  },
]
