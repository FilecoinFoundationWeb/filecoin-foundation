import Image from 'next/image'

import { type Author } from '@filecoin-foundation/utils/types/authorTypes'
import { clsx } from 'clsx'

const IMAGE_SIZE = 32
const sharedAvatarStyle = 'rounded-full ring avatar-ring'

export function Avatar({ firstName, lastName, image }: Author) {
  if (image) {
    return (
      <Image
        src={image.src}
        alt={`Photo of ${firstName} ${lastName}`}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        className={clsx(sharedAvatarStyle, 'inline-block size-8 object-cover')}
      />
    )
  }

  return (
    <div
      aria-label={`Initials of ${firstName} ${lastName}`}
      style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
      className={clsx(
        sharedAvatarStyle,
        'avatar-background flex items-center justify-center',
      )}
    >
      <span className="avatar-initials text-sm font-medium leading-none">
        {getInitials(firstName, lastName)}
      </span>
    </div>
  )
}

function getInitials(firstName: string, lastName: string) {
  return (firstName.trim()[0] + lastName.trim()[0]).toUpperCase()
}
