declare module '../content/*.md' {
  const attributes: import('@/types/attributesTypes').SecurityMaturityModelAttributes
  const react: React.ComponentType
  export { attributes, body, react }
}

declare module '*.md' {
  const attributes: import('@/types/attributesTypes').PageAttributes
  const react: React.ComponentType
  export { attributes, body, react }
}
