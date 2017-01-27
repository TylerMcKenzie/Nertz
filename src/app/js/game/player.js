import React from 'react'
import Deck from './deck'

class Player extends React.Component {
  render() {
    return (
      <div id={this.props.id} className="player">
        <Deck playerId={this.props.id} />
      </div>
    )
  } 
}

export default Player