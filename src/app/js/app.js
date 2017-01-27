import React from 'react'
import ReactDOM from 'react-dom'
import Game from './game/game'

class App extends React.Component {

  render() {
    let numOfPlayers = 2
    
    return (
      <Game players={numOfPlayers}/>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))