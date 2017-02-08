import React from 'react'
import { connect } from 'react-redux'
import Deck from './deck'

class Player extends React.Component {
  constructor(props) {
    super(props)
    let startDeck = new Deck(props.id)
  }
  renderCardFlop (cardArr) {
    return cardArr.slice(cardArr.length - 3, cardArr.length).map((card) => card.render())
  }
  renderCardGroup (cardArr) {
    return cardArr.map((card) => card.render())
  }
  handleCardFlop(deck, event) {
    if(deck.length > 0) {

    } else {

    }
  }
  handleCardClick (event) {
    let el = event.target
    let parent = el.parentNode
    if (el.classList.contains('card')) {
      const card = {
        suit: el.getAttribute('data-suit'),
        value: el.getAttribute('data-value')
      }
      let clickedCard = (cardIn) => {
        if (card.suit === cardIn.suit && card.value === cardIn.value) {
          return cardIn
        }
      }

      var selectedCardIndex

      if (parent.classList.contains('deck-draw')) {
        selectedCardIndex = this.state.hand.deckDraw.findIndex(clickedCard)

        // el.remove()
      } else if (parent.classList.contains('nertz-pile')) {
        selectedCardIndex = this.state.hand.nertzPile.findIndex(clickedCard)
        // this.state.hand.nertzPile.splice(selectedCardIndex, 1)

      } else if (parent.classList.contains('playing-cards')) {
        selectedCardIndex = this.state.hand.playingCards.findIndex(clickedCard)
        // this.state.hand.playingCards.splice(selectedCardIndex, 1)
      }

    }
  }
  render() {
    return (
      <div id={this.props.id} className="player">
        <div className="deck" onClick={this.handleCardClick}>
          <div className="deck-button" onClick={this.handleCardFlop}>DECK Button</div>
          <div className="deck-draw">Flop: </div>
          <div className="nertz-pile">Pile: </div>
          <div className="playing-cards">Playing: </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const playerState = state.playerState
  return {
    playerState: {
      deck: playerState.deck,
      hand: {
        nertzPile: playerState.hand.nertzPile,
        playingCards: playerState.hand.playingCards,
        deckDraw: playerState.hand.deckDraw
      }
    }
  }
}

export default Player
