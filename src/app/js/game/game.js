import React from 'react'
import Player from './player'
import Board from './board'

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
        <div className='board'>
          <Board />
        </div>
        <div className='players'>
          {players}
        </div>
      </div>
    )
  }
}

export default Game
