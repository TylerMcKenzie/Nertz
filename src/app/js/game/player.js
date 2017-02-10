import React from 'react'
import { connect } from 'react-redux'
import { setInitialPlayerState, setSelectedCard, unSetSelectedCard } from '../store/actionCreators'
import Deck from './deck'

class Player extends React.Component {
  constructor(props) {
    super(props)
    // Initialize playerState on construct
    let startDeck = new Deck(props.id)

    let initialProps = {
      deck: startDeck.cards,
      hand: {
        nertzPile: startDeck.nertzPile,
        playingCards: startDeck.playingCards,
        deckDraw: []
      }
    }

    this.props.dispatchSetInitialPlayerState(initialProps)
    this.handleCardClick = this.handleCardClick.bind(this)
  }
  renderCardFlop (cardArr) {
    return cardArr.slice(cardArr.length - 3, cardArr.length).map((card) => card.render())
  }
  renderCardGroup (cardArr) {
    if(Array.isArray(cardArr[0])) {
      return cardArr.map((subArr, i) => subArr.map((card, j) => {
        if(j === 0) {
          return card.render()
        }}))
    } else {
      return cardArr.map((card,i, arr) => {
        if(i===arr.length-1) {
          return card.render()
        }
      })
    }
  }
  handleCardFlop(deck, event) {
    if(deck.length > 0) {

    } else {

    }
  }
  handleCardClick (event) {
    if (event.target.classList.contains('card')) {
      let cardEl = event.target

      let parent = cardEl.parentNode

      const card = {
        suit: cardEl.getAttribute('data-suit'),
        value: cardEl.getAttribute('data-value'),
        color: cardEl.getAttribute('data-color')
      }

      let clickedCard = (cardIn) => {
        if (card.suit === cardIn.suit && card.value === cardIn.value) {
          return cardIn
        }
      }

      if(!cardEl.classList.contains('selected')) {
        if(!this.props.selectedCard.isSelected) {


          let selectedCard

          if (parent.classList.contains('deck-draw')) {
            selectedCard = this.props.hand.deckDraw.find(clickedCard)
          } else if (parent.classList.contains('nertz-pile')) {
            selectedCard = this.props.hand.nertzPile.find(clickedCard)
          } else if (parent.classList.contains('playing-cards')) {
            this.props.hand.playingCards.map((cardArr) => {
              if(cardArr.find(clickedCard)) {
                selectedCard = cardArr.find(clickedCard)
              }
            })
          }

          selectedCard.isSelected = true

          if(this.props.selectedCard) {
            this.props.selectedCard.isSelected = false
          }

          this.props.dispatchSetSelectedCard(selectedCard)
        } else {
          if (parent.classList.contains('playing-cards')) {
            let cardToPlayOn
            const deckToPlayIn = 'playing-cards'

            this.props.hand.playingCards.map((cardArr) => {
              if(cardArr.find(clickedCard)) {
                cardToPlayOn = cardArr.find(clickedCard)
              }
            })

            if(this.props.selectedCard.value < cardToPlayOn.value && this.props.selectedCard.color !== cardToPlayOn.color) {
              console.log(this.props.selectedCard)
              console.log(cardToPlayOn)
            }
          }
        }
      } else {

        if(this.props.selectedCard) {
          this.props.selectedCard.isSelected = false
        }

        this.props.dispatchUnSetSelectedCard()
      }
    }
  }
  render() {
    return (
      <div id={this.props.id} className="player">
        <div className="deck" onClick={this.handleCardClick}>
          <div className="deck-button" onClick={this.handleCardFlop}>DECK Button</div>
          <div className="deck-draw">Flop: {this.renderCardFlop(this.props.hand.deckDraw)}</div>
          <div className="nertz-pile">Pile: {this.renderCardGroup(this.props.hand.nertzPile)}</div>
          <div className="playing-cards">Playing: {this.renderCardGroup(this.props.hand.playingCards)}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.playerState
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetInitialPlayerState (props) {
      dispatch(setInitialPlayerState(props))
    },
    dispatchSetSelectedCard (card) {
      dispatch(setSelectedCard(card))
    },
    dispatchUnSetSelectedCard () {
      dispatch(unSetSelectedCard())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
