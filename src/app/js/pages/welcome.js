import React from 'react'
import { Link } from 'react-router-dom'

class Welcome extends React.Component {
  render () {
    return (
      <div className='welcome'>
        <h1>Welcome to Nertz</h1>
        <Link to='/game'>Game</Link>
      </div>
    )
  }
}

export default Welcome
