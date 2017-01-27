import React from 'react'
import Player from './player.js'


class Game extends React.Component {

  generatePlayers(n){
    let arr = []

    for(let i = 1; i < n+1; i++) {
      arr.push(<Player key={i} id={i}/>)
    }

    return arr
  }

  render() {
    let players = this.generatePlayers(this.props.players)

    return (
      <div className="game">
        {players}
      </div>
    )
  } 
}

export default Game