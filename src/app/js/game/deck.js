import React from 'react'
import Card from './card'
import CardData from './data/carddata'
import { shuffle } from '../utils/math-utils'

class Deck {
  constructor(playerId) {
    this.playerId = playerId
    this.cards = this.generateCards(playerId)
    this.savedCards = this.cards.slice(0)
  }

  selectCard(card) {
    
    let thisCard = this.savedCards.find((cardIn) => {
      return cardIn.props.cardIndex === card.props.cardIndex
    })

    if(thisCard) {
      thisCard.props.isSelected = true
    }

    return thisCard
  }

  generateCards(deckId) {
    let cardInfo = CardData
    let cards = []

    cardInfo.map((card, i) => {
      cards.push(<Card key={i} cardIndex={i} deckId={deckId} suit={card.suit} color={card.color} value={card.value} select={this.selectCard.bind(this)} />)
    })

    let shuffledCards = shuffle(cards)
    return shuffledCards
  }


}

export default Deck
