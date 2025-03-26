import Image from 'next/image'

import { type Author } from '@filecoin-foundation/utils/types/authorTypes'
import { clsx } from 'clsx'

const IMAGE_SIZE = {
  default: 32,
  large: 40,
}

const sharedAvatarStyle = 'rounded-full ring avatar-ring'

type AvatarProps = Author & {
  size?: 'default' | 'large'
}

export function Avatar({
  firstName,
  lastName,
  image,
  size = 'default',
}: AvatarProps) {
  if (image) {
    return (
      <Image
        src={image.src}
        alt={`Photo of ${firstName} ${lastName}`}
        width={IMAGE_SIZE[size]}
        height={IMAGE_SIZE[size]}
        className={clsx(
          sharedAvatarStyle,
          'inline-block object-cover',
          size === 'default' ? 'size-8' : 'size-10',
        )}
      />
    )
  }

  return (
    <div
      aria-label={`Initials of ${firstName} ${lastName}`}
      style={{ width: IMAGE_SIZE[size], height: IMAGE_SIZE[size] }}
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
