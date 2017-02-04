import React from 'react'
import Player from './player.js'


class Game extends React.Component {
  constructor(props) {
    super()
    this.state = {
      players: this.generatePlayers(props.players),
      gameDeck: []
    }

  }

  addToGameDeck(card) {
    this.setState((prevState, props) => {
      prevState.gameDeck.push(card)
      console.log(prevState)
    })
  }

  generatePlayers(n) {
    let arr = []

    for(let i = 1; i < n+1; i++) {
      arr.push(<Player key={i} id={i} playCard={this.addToGameDeck.bind(this)} />)
    }

    return arr
  }

  render() {
    let players = this.state.players

    return (
      <div className="game">
        <div className="board">BOARD</div>
        {players}
      </div>
    )
  } 
}

export default Game