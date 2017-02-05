import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store/store'
import Welcome from './pages/welcome'
import Game from './game/game'

class App extends React.Component {
  render() {
    let numOfPlayers = 1

    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='app'>
            <Match
              exactly
              pattern='/'
              component={Welcome}
            />
            <Match
              exactly
              pattern='/game'
              component={(props) => {
                return <Game players={numOfPlayers} />
              }
            }
            />
        </div>
        </Provider>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
