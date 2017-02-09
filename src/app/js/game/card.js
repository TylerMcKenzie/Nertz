import React from 'react'

class Card {
  constructor(deckId, cardData, cardIndex) {
    this.deckId = deckId
    this.suit = cardData.suit
    this.color = cardData.color
    this.value = cardData.value
    this.index = cardIndex
    this.isSelected = false
  }
  select () {
    return this.isSelected = true
  }
  render () {
    let className
    if(this.isSelected) {
      className = 'card selected'
    } else {
      className = 'card'
    }
    const Card = React.createClass({
      render () {
        return (
          <div className={className} data-suit={this.props.suit} data-value={this.props.value}>
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

    return <Card key={this.index} suit={this.suit} value={this.value} isSelected={this.isSelected}/>
  }
}

export default Card
