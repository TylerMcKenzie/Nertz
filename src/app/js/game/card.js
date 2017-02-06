import React from 'react'

class Card {
  constructor(deckId, cardData, cardIndex) {
    this.deckId = deckId
    this.suit = cardData.suit
    this.color = cardData.color
    this.value = cardData.value
    this.index = cardIndex
  }
  render () {
    const Card = React.createClass({
      render () {
        return (
          <div className='card' data-suit={this.props.suit} data-value={this.props.value}>
            <div className='suit'>
              {this.props.suit}
            </div>
            <div className='value'>
              {this.props.value}
            </div>
          </div>
        )
      }
    })

    return <Card key={this.index} suit={this.suit} value={this.value} />
  }
}

export default Card
