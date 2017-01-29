import React from 'react'
import ReactDOM from 'react-dom'
import Game from './game/game'

class App extends React.Component {

  render() {
    let numOfPlayers = 1
    
    return (
      <Game players={numOfPlayers}/>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))