import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Welcome from './pages/welcome'
import Game from './game/game'

class App extends React.Component {
  render () {
    let numOfPlayers = 1

    return (
        <Provider store={store}>
          <Game players={numOfPlayers} />
        </Provider>
    )
  }
}

render(<App />, document.getElementById('app'))
