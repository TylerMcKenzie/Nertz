import Card from './card'
import CardData from './data/carddata'
import { shuffle } from '../utils/math-utils'

class Deck {
  constructor(playerId) {
    this.playerId = playerId
    this.cards = this.generateCards(playerId)
    this.shuffledCards = shuffle(this.cards)
  }
  selectCard(card) {
    console.log(this.cards)

    let selectedCard = this.cards.find((cardIn) => {
      if (card.suit === cardIn.suit && card.value === cardIn.value) {
        // console.log(cardIn)
      }
    })
    // return thisCard
  }
  generateCards(deckId) {
    let cardInfo = CardData
    let cards = []

    cardInfo.map((card, i) => {
      cards.push(new Card(this.playerId, card, i))
    })

    return cards
  }
}

export default Deck
