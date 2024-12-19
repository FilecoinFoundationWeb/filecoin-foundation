export type NonEmptyMutableArray<T> = [T, ...Array<T>]
export type NonEmptyReadonlyArray<T> = readonly [T, ...Array<T>]
export type Object = Record<string, unknown>
