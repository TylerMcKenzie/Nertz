export function removeItem (array, index) {
  return [
    ...array.slice(0, index),
    ...array.slice(index+1)
  ]
}

export function removeItems (array, start, stop) {
  return [
    ...array.slice(0, start),
    ...array.slice(stop+1, array.length)
  ]
}

export function addItem (array, item) {
  return [...array, item]
}

export function addItems (array, items) {
  return [...array, ...items]
}
