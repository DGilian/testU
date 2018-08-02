import React, { Component } from 'react'
import './App.css'
import Child from './Child'

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  clickIncrement = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }
  clickReset = () => {
    this.setState(() => {
      return { count: 0 }
    })
  }
  render() {
    return (
      <div className="App">
        <p>test</p>
        <Child counter={this.state.count} />
        <button onClick={this.clickIncrement}>+</button>
        <button onClick={this.clickReset}>reset</button>
      </div>
    )
  }
}

export default App
