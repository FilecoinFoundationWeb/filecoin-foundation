export function translateBlogCategory(
  t: (key: string) => string,
  category: string,
) {
  return t(`categories.${category}`)
}
