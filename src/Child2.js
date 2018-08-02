import React, { Component } from 'react'
export default class Child2 extends Component {
  constructor() {
    super()
  }
  componentWillMount() {
    console.log('willMount child2')
    this.shouldComponentUpdate()
  }
  shouldComponentUpdate() {
    console.log('shouldcomponentUpdate  child2')
    return false
  }
  render() {
    console.log('render child2')
    return (
      <div>
        <p>hello child2</p>
      </div>
    )
  }
}
