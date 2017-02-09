export function getSiblings(elm) {
  var siblings = []
  var sibling = elm.parentNode.firstChild
  var skip = elm
  while( sibling && sibling.nodeType === 1 && sibling !== skip) {
    siblings.push(sibling)
    console.log(sibling)
    sibling = sibling.nextElementSibling || sibling.nextSibling
  }
  return siblings
}
