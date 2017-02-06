let generateCardData = () => {
  let cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  let cardSuits = ['Heart', 'Club', 'Spade', 'Diamond']
  let getColor = (suit) => {
    if(suit === 'Heart' || suit === 'Diamond') {
      return 'red'
    } else {
      return 'black'
    }
  }

  let arr = []

  for(let suit in cardSuits) {
    for(let value in cardValues) {
      arr.push({suit: cardSuits[suit], color: getColor(cardSuits[suit]), value: cardValues[value]})
    }
  }

  return arr
}

let cardArr = generateCardData()

export default cardArr
