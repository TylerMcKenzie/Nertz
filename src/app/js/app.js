import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Game from './game/game'

class App extends React.Component {

  render() {
    let numOfPlayers = 1
    
    return (
      <Provider store={store}>
        <Game players={numOfPlayers}/>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
