import React from 'react'
import { Link } from 'react-router'

class Welcome extends React.Component {
  render () {
    return (
      <div className='welcome'>
        <h1>Welcome to Nertz</h1>
        <Link to={{ pathname: '/game', state: { gameStart: 1 }}}>Game</Link>
      </div>
    )
  }
}

export default Welcome
