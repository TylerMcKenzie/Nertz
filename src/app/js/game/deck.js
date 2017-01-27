import React from 'react'
import Card from './card'
import CardData from './data/carddata'

class Deck extends React.Component {
  renderCards() {
    let cardArr = CardData
    let cards = []
    
    cardArr.map((card, i) => {
      cards.push(<Card key={i} deckId={this.props.playerId} suit={card.suit} color={card.color} value={card.value} />)
    })

    return cards
  }

  render() {
    return (
      <div className="deck-container">
        {this.renderCards()}
      </div>
    )
  }
}

export default Deck