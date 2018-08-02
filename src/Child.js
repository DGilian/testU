import React, { Component } from 'react'
import Child2 from './Child2'

export default class Child extends Component {
  constructor() {
    super()
    this.state = {
      show: 0
    }
  }
  handleClick = () => {
    this.setState(prevState => {
      return { show: prevState.show + 1 }
    })
  }
  componentWillReceiveProps({ counter }) {
    if (counter === 0) {
      this.setState({
        show: 0
      })
    } else if (counter <= this.state.show) {
      this.handleClick()
    } else {
      this.setState({
        show: counter
      })
    }
  }
  shouldComponentUpdate(nextProps) {
    if (this.state.show !== nextProps.counter) {
      return true
    } else {
      return false
    }
  }

  render() {
    console.log('child1 : render')

    return (
      <div>
        <p>{this.state.show}</p>
        <button onClick={this.handleClick}>+</button>
        <hr />
        <Child2 props={this.props} />
      </div>
    )
  }
}
