import React from 'react'
import Deck from './deck'

class Player extends React.Component {
  constructor(props) {
    super(props)
    
    let startDeck = new Deck(props.id)

    var fillNertzPile = (deck) => {
      return deck.splice(0, 13)
    }

    var dealPlayingCards = (deck) => {
      return deck.splice(0, 4) 
    }

    this.state = {
      deck: startDeck,
      hand: {
        nertzPile: fillNertzPile(startDeck.cards),
        playingCards: dealPlayingCards(startDeck.cards),
        deckDraw: []
      }
    }
  }

  drawCards(deck, event) {
    if(deck.length > 0) {
      this.setState((prevState, props) => {
        prevState.hand.deckDraw = prevState.hand.deckDraw.concat(deck.splice(0,3))
      })
    } else {
      this.setState((prevState, props) => {
        prevState.deck.cards = prevState.hand.deckDraw
        prevState.hand.deckDraw = []
      })
    }
  }

  render() {
    let deck = this.state.deck.cards

    return (
      <div id={this.props.id} className="player">
        <div className="deck">
          <div className="deck-button" onClick={this.drawCards.bind(this, deck)}>DECK Button</div>
          <div className="deck-draw">Flop: {this.state.hand.deckDraw}</div>
          <div className="nertz-pile">Pile: <br/>{this.state.hand.nertzPile[0]}</div>
          <div className="playing-cards">Playing: <br/>{this.state.hand.playingCards}</div>
        </div>
      </div>
    )
  } 
}

export default Player
