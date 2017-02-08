import React from 'react'
import { connect } from 'react-redux'
import Player from './player'

class Game extends React.Component {
  generatePlayers(n) {
    let arr = []

    for(let i = 1; i < n+1; i++) {
      arr.push(<Player key={i} id={i} />)
    }

    return arr
  }

  render() {
    let players = this.generatePlayers(1)

    return (
      <div className='game'>
        <div className='board'>BOARD</div>
        <div className='players'>
          {players}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameState: {
      round: state.gameState.round,
      gameDeck: state.gameState.gameDeck,
      playerScores: state.gameState.playerScores
    }
  }
}

export default connect(mapStateToProps)(Game)
