let generateCardData = () => {
  let cardValues = ['0', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
  let cardSuits = ['Heart', 'Club', 'Spade', 'Diamond']
  let getColor = (suit) => {
    if(suit === 'Heart' || suit === 'Diamond') {
      return 'red'
    } else {
      return 'black'
    }
  }
  let getNamedValue = (value) => {
    switch(value) {
      case '0':
        return 'A'
      case '11':
        return 'J'
      case '12':
        return 'Q'
      case '13':
        return 'K'
      default:
        return value
    }
  }
  let arr = []

  for(let suit in cardSuits) {
    for(let value in cardValues) {
      arr.push({suit: cardSuits[suit], color: getColor(cardSuits[suit]), value: cardValues[value], namedValue: getNamedValue(cardValues[value])})
    }
  }

  return arr
}

let cardArr = generateCardData()

export default cardArr
