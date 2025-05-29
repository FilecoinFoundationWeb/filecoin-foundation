import { type StaticPath } from '@/constants/paths'

export function createPathConfig<Path extends StaticPath, Label extends string>(
  path: Path,
  label: Label,
) {
  return {
    path,
    label,
  } as const
}
