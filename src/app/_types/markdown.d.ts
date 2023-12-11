declare module '*.md' {
  const attributes: import('@/types/pageTypes').PageAttributes
  const react: React.ComponentType
  export { attributes, react }
}
