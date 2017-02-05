import React from 'react'

class Card {
  constructor(deckId, cardData, cardIndex) {
    this.deckId = deckId
    this.suit = cardData.suit
    this.color = cardData.color
    this.value = cardData.value
    this.index = cardIndex
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (event) {
    console.log(this)
  }
  render () {
    const Card = React.createClass({
      render () {
        return (
          <div className='card' onClick={this.props.handleClick}>
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

    return <Card key={this.index} suit={this.suit} value={this.value} handleClick={this.handleClick}/>
  }
}

export default Card
