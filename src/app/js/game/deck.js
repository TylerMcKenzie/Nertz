import Card from './card'
import CardData from './data/carddata'
import { shuffle } from '../utils/math-utils'

class Deck {
  constructor(playerId) {
    this.playerId = playerId
    this.cards = this.generateCards(playerId)
    this.shuffledCards = shuffle(this.cards)
    this.nertzPile = this.shuffledCards.splice(0, 13)
    this.playingCards = {
      pile1: this.shuffledCards.splice(0, 1),
      pile2: this.shuffledCards.splice(0, 1),
      pile3: this.shuffledCards.splice(0, 1),
      pile4: this.shuffledCards.splice(0, 1)
    }
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
