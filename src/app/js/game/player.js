import React from 'react'
import { connect } from 'react-redux'
import { setInitialPlayerState, setSelectedCard, unSetSelectedCard, drawCards, flipDeck, playOnHand } from '../store/actionCreators'
import Deck from './deck'

class Player extends React.Component {
  constructor(props) {
    super(props)
    let startDeck = new Deck(props.id)

    let initialProps = {
      deck: startDeck.shuffledCards,
      hand: {
        nertzPile: startDeck.nertzPile,
        playingCards: startDeck.playingCards,
        deckDraw: []
      }
    }

    this.props.dispatchSetInitialPlayerState(initialProps)
    this.handleCardClick = this.handleCardClick.bind(this)
    this.handleCardFlop = this.handleCardFlop.bind(this)
  }
  renderCardFlop (cardArr) {
    if(cardArr.length > 0) {
      return cardArr.slice(cardArr.length - 3, cardArr.length).map((card) => card.render())
    } else {
      return (
        <div className="card empty">EMPTY</div>
      )
    }
  }
  renderPlayingCards (cardArr) {
    return Object.keys(cardArr).map((key) => {
      return (<ul key={key} className='pile'>{ cardArr[key].length !== 0 ? cardArr[key].map((card, i) => { return (<li key={i} className='playing-card'>{card.render()}</li>)}) : <div className="card empty">EMPTY</div>}</ul>)})
  }
  renderNertzPile (cardArr) {
    if(cardArr.length !== 0) {
      if(Array.isArray(cardArr[0])) {
        return cardArr.map((subArr, i) => subArr.map((card, j) => {
          if(j === 0) {
            return card.render()
          }}))
      } else {
        return cardArr.map((card,i, arr) => {
          if(i === arr.length-1) {
            return card.render()
          }
        })
      }
    } else {
      return (
        <div className="card empty">EMPTY</div>
      )
    }
  }
  handleCardFlop(event) {
    if (this.props.deck.length > 0) {
      this.props.dispatchDrawCards()
    } else {
      this.props.dispatchFlipDeck()
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
            if(cardEl === parent.childNodes[parent.childNodes.length-1]) {
              selectedCard = this.props.hand.deckDraw.find(clickedCard)
            }
          } else if (parent.classList.contains('nertz-pile')) {
            selectedCard = this.props.hand.nertzPile.find(clickedCard)
          } else if (parent.classList.contains('playing-card')) {
            Object.keys(this.props.hand.playingCards).map((key) => {
              this.props.hand.playingCards[key].map((cardIn) => {
                if(card.suit === cardIn.suit && card.value === cardIn.value) {
                  selectedCard = cardIn
                }
              })
            })
          }

          if (selectedCard) {
            selectedCard.isSelected = true

            if(this.props.selectedCard) {
              this.props.selectedCard.isSelected = false
            }

            this.props.dispatchSetSelectedCard(selectedCard)
          }
        } else {
          if (parent.classList.contains('playing-card')) {
            let cardToPlayOn, pileToPlayIn

            Object.keys(this.props.hand.playingCards).map((key) => {
              this.props.hand.playingCards[key].map((cardIn) => {
                if(card.suit === cardIn.suit && card.value === cardIn.value) {
                  cardToPlayOn = cardIn
                  pileToPlayIn = key
                }
              })
            })

            if(this.props.selectedCard.canBePlayedOnPlayer(cardToPlayOn)) {
              console.log('Playable')
              this.props.dispatchPlayOnHand(cardToPlayOn, pileToPlayIn)
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
          <div className="nertz-pile">Pile: {this.renderNertzPile(this.props.hand.nertzPile)}</div>
          <div className="playing-cards">Playing: {this.renderPlayingCards(this.props.hand.playingCards)}</div>
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
    },
    dispatchDrawCards () {
      dispatch(drawCards())
    },
    dispatchFlipDeck () {
      dispatch(flipDeck())
    },
    dispatchPlayOnHand (card, dest) {
      dispatch(playOnHand(card, dest))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
