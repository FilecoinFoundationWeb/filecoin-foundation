export type RootMetadata<T extends string = string> = {
  readonly title: {
    readonly template: T
    readonly default: string
  }
  readonly metadataBase: URL
}
