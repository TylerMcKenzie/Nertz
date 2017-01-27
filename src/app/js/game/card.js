import React from 'react'

class Card extends React.Component {
  handleClick(event) {
    let el = event.target.classList.contains('card') ? event.target : event.target.parentNode
    console.log(el.className)

    if(!el.classList.contains('selected')) {
      el.classList.add('selected')
      console.log(el.className)
    } else {
      el.classList.remove('selected')
    }
  }

  render() {
    return (
      <div className="card" onClick={this.handleClick.bind(this)}>
        <div className={this.props.color}>{this.props.value}{this.props.suit}</div>
      </div>
    )
  }
}

export default Card