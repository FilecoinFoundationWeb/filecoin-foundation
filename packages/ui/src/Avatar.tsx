import Image from 'next/image'

import { clsx } from 'clsx'

const IMAGE_SIZE = 32
const sharedAvatarStyle = 'rounded-full ring-2 ring-(--color-avatar-ring)'

export type AvatarProps = {
  firstName: string
  lastName: string
  image?: { src: string }
}

export function Avatar({ firstName, lastName, image }: AvatarProps) {
  if (image) {
    return (
      <Image
        src={image.src}
        alt={`Photo of ${firstName} ${lastName}`}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        className={clsx(sharedAvatarStyle, 'inline-block object-cover')}
      />
    )
  }

  return (
    <div
      aria-label={`Initials of ${firstName} ${lastName}`}
      style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
      className={clsx(
        sharedAvatarStyle,
        'bg-(--color-avatar-background) flex items-center justify-center',
      )}
    >
      <span className="text-(--color-avatar-initials) text-sm font-medium leading-none">
        {getInitials(firstName, lastName)}
      </span>
    </div>
  )
}

function getInitials(firstName: string, lastName: string) {
  return (firstName.trim()[0] + lastName.trim()[0]).toUpperCase()
}
