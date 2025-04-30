export const sharedGroups = [
  'builtin',
  'external',
  'internal',
  'parent',
  'sibling',
  'index',
]

export const sharedPathGroups = [
  { pattern: '{fs,path}', group: 'builtin', position: 'before' },
  { pattern: 'react', group: 'external', position: 'before' },
  { pattern: 'next', group: 'external', position: 'before' },
  {
    pattern: '@filecoin-foundation/**',
    group: 'external',
    position: 'after',
  },
  { pattern: '#**', group: 'internal', position: 'before' },
  {
    pattern: '*.+(css|scss|sass|less)',
    group: 'index',
    position: 'after',
  },
]
