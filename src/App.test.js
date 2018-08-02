import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import App from './App'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

configure({ adapter: new Adapter() })

describe('when increment', () => {
  it('clickIncrement call after click on button', () => {
    // create a spy function
    const spy = sinon.spy()
    // pass spy function as our toggleForecast prop
    const wrapper = mount(<App />)
    console.log('------')
    console.log(wrapper.clickIncrement)
    console.log('------')
    console.log('test', wrapper.find('button'))
    wrapper
      .find('button')
      .first()
      .simulate('click')

    expect(spy.calledOnce).toBe(true)
  })

  it('renders "test"', () => {
    const wrapper = mount(<App />)
    const text = <p>test</p>

    expect(wrapper.contains(text)).toEqual(true)
  })
})
