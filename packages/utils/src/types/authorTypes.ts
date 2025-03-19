export type Author = {
  firstName: string
  lastName: string
  image?: { src: string }
}

export type AuthorExtended = Author & {
  company: string
  bio: string
}
