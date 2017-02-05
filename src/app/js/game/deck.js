import Card from './card'
import CardData from './data/carddata'
import { shuffle } from '../utils/math-utils'

class Deck {
  constructor(playerId) {
    this.playerId = playerId
    this.cards = this.generateCards(playerId)
    this.shuffledCards = shuffle(this.cards)
    this.selectCard = this.selectCard.bind(this)
  }

  selectCard(card) {

    let thisCard = this.cards.find((cardIn) => {
    })

    return thisCard
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
