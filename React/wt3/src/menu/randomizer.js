export function pickRandomItems(items, amount) {
  const copy = [...items]
  const selected = []

  while (selected.length < amount && copy.length > 0) {
    const randomIndex = Math.floor(Math.random() * copy.length)
    selected.push(copy.splice(randomIndex, 1)[0])
  }

  return selected
}
