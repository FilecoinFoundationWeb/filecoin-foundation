/**
 * Randomly shuffles the elements of an array and returns a new array using the Fisher-Yates (Durstenfeld) shuffle algorithm.
 * This function does not mutate the original array, maintaining immutability.
 *
 * @param {T[]} originalArray - The array to shuffle, where T is any type.
 * @returns {T[]} A new array with shuffled elements.
 */
export function shuffleArray<T>(originalArray: T[]): T[] {
  const array = [...originalArray]

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}
