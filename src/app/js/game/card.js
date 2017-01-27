import React from 'react'

class Card extends React.Component {
  render() {
    return (
      <div>
        <div className="front">{this.props.value}</div>
      </div>
    )
  }
}

export default Card