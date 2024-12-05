export type NonEmptyReadonlyArray<T> = readonly [T, ...Array<T>]
export type Object = Record<string, unknown>
export type ArrayWithAtLeastTwoItems<Item> = [Item, Item, ...Array<Item>]
