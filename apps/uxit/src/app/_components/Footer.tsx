import { CopyrightText } from '@filecoin-foundation/ui/CopyrightText'

export function Footer() {
  return (
    <footer className="mt-16 flex flex-col gap-6 text-center text-sm">
      <hr className="text-neutral-400" />
      <CopyrightText siteName="UXIT · Filecoin Foundation" />
    </footer>
  )
}
