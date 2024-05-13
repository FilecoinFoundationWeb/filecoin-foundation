export default function Capitalise(word: string) {
  if (!word || word.length === 0) return word

  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}
