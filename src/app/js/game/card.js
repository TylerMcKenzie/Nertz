import React from 'react'

class Card extends React.Component {
  constructor() {
    super()
    this.state = {
      isSelected: false
    }
  }

  handleClick(event) {
    let el = event.target.classList.contains('card') ? event.target : event.target.parentNode
    console.log(this.props)
    if(!this.props.isSelected) {
      this.setState((prevState, props) => {
        prevState.isSelected = true
      })

      this.props.select(this)
    } else {
      this.setState((prevState, props) => {
        prevState.isSelected = false
      })
    }
  }

  render() {
    return (
      <div className={this.state.isSelected ? style.sel : style.notSel} onClick={this.handleClick.bind(this)}>
        <div className={this.props.color}>{this.props.value} {this.props.suit}</div>
      </div>
    )
  }
}

var style = {}

style.sel = "card selected"
style.notSel = "card"

export default Card