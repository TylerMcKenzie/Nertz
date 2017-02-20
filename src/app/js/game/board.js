import React from 'react'
import { connect } from 'react-redux'
import { playOnGame } from '../store/actionCreators'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    console.log(event.target)
    let pileEl = event.target
    if(pileEl.classList.contains('empty')) {
      console.log(this.props)
    } else {

    }
  }

  renderGameDeck (gameDeckArr) {
    console.log(gameDeckArr)
    if(gameDeckArr.length === 0) {
      return <div className='game-pile empty'></div>
    } else {
      gameDeckArr.map((pile) => {
        return <div className='game-pile'>
          {pile.map((cardInPile) => cardInPile.render())}
        </div>
      })
    }
  }

  render () {
    return (
      <div onClick={this.handleClick}>
        <div>BOARD:</div>
        {this.renderGameDeck(this.props.gameDeck)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let gameState = Object.assign({}, state.gameState)
  // This is normally bad practice but in this instance I need these values to be the same here and on the Player
  gameState.selectedCard = state.selectedCard
  return gameState
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchPlayOnGame (cardLocation, cardDest, cardToPlay) {
      dispatch(playOnGame(cardLocation, cardDest, cardToPlay))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
