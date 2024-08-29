declare module '../content/*.md' {
  const attributes: import('@/types/pageTypes').SecurityMaturityModelAttributes
  const react: React.ComponentType
  export { attributes, react }
}

declare module '*.md' {
  const attributes: import('@/types/pageTypes').PageAttributes
  const react: React.ComponentType
  export { attributes, react }
}
