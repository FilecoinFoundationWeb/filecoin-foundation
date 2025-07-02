import Image from 'next/image'

import { XIcon } from '@phosphor-icons/react/dist/ssr'

import { Icon } from '@filecoin-foundation/ui/Icon'


type SelectedFileProps = {
  file: File
  onReset: () => void
}

export function SelectedFile({ file, onReset }: SelectedFileProps) {
  return (
    <div className="h-full w-full">
      <Image
        fill
        src={URL.createObjectURL(file)}
        alt={file.name}
        className="rounded-lg object-cover"
      />

      <button
        className="group absolute top-2 right-2 rounded-full p-2 focus:brand-outline"
        aria-label="Remove selected file"
        onClick={onReset}
      >
        <div className="z-10 flex size-8 items-center justify-center rounded-full bg-brand-100 p-3 text-brand-700 shadow-brand-800/20 drop-shadow-md group-hover:bg-brand-200">
          <Icon component={XIcon} size={20} />
        </div>
      </button>
    </div>
  )
}
