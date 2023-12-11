import Image from 'next/image'

export default function Logo() {
  return (
    <Image
      src="/assets/images/logo.svg"
      alt="Filecoin Foundation logo"
      width={147}
      height={41}
    />
  )
}
