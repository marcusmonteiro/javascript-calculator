/* eslint-env jest */

import React from 'react'
import sinon from 'sinon'
import { mount } from 'enzyme'
import Calculator from '..'

let sandbox
beforeEach(() => {
  sandbox = sinon.sandbox.create()
})

afterEach(() => {
  sandbox.restore()
})

describe('<Calculator />', () => {
  it(`should have the following buttons:

      AC CE / *
      7 8 9 -
      4 5 6 +
      1 2 3 =
      0 .

      with each of these buttons appending their value to the expression to be
      evaluated, except for the special ones.
    `, () => {
    sandbox.spy(Calculator.prototype, 'handleButtonClick')

    const numberOfButtons = 18
    const wrapper = mount(<Calculator />)

    expect(wrapper.find('button').length).toBe(numberOfButtons)

    const Button0 = wrapper.find('#Button0')
    Button0.simulate('click')
    expect(Calculator.prototype.handleButtonClick.calledOnce).toBe(true)
    expect(wrapper.state('expression')).toBe('0')

    const Button1 = wrapper.find('#Button1')
    Button1.simulate('click')
    expect(Calculator.prototype.handleButtonClick.calledTwice).toBe(true)
    expect(wrapper.state('expression')).toBe('01')

    const Button2 = wrapper.find('#Button2')
    Button2.simulate('click')
    expect(Calculator.prototype.handleButtonClick.calledThrice).toBe(true)
    expect(wrapper.state('expression')).toBe('012')

    const Button3 = wrapper.find('#Button3')
    Button3.simulate('click')
    expect(Calculator.prototype.handleButtonClick.callCount).toBe(4)
    expect(wrapper.state('expression')).toBe('0123')

    const Button4 = wrapper.find('#Button4')
    Button4.simulate('click')
    expect(Calculator.prototype.handleButtonClick.callCount).toBe(5)
    expect(wrapper.state('expression')).toBe('01234')

    const Button5 = wrapper.find('#Button5')
    Button5.simulate('click')
    expect(Calculator.prototype.handleButtonClick.callCount).toBe(6)
    expect(wrapper.state('expression')).toBe('012345')

    const Button6 = wrapper.find('#Button6')
    Button6.simulate('click')
    expect(Calculator.prototype.handleButtonClick.callCount).toBe(7)
    expect(wrapper.state('expression')).toBe('0123456')

    const Button7 = wrapper.find('#Button7')
    Button7.simulate('click')
    expect(Calculator.prototype.handleButtonClick.callCount).toBe(8)
    expect(wrapper.state('expression')).toBe('01234567')

    const Button8 = wrapper.find('#Button8')
    Button8.simulate('click')
    expect(Calculator.prototype.handleButtonClick.callCount).toBe(9)
    expect(wrapper.state('expression')).toBe('012345678')

    const Button9 = wrapper.find('#Button9')
    Button9.simulate('click')
    expect(Calculator.prototype.handleButtonClick.callCount).toBe(10)
    expect(wrapper.state('expression')).toBe('0123456789')

    const ButtonPlus = wrapper.find('#ButtonPlus')
    ButtonPlus.simulate('click')
    expect(Calculator.prototype.handleButtonClick.callCount).toBe(11)
    expect(wrapper.state('expression')).toBe('0123456789+')

    const ButtonMinus = wrapper.find('#ButtonMinus')
    ButtonMinus.simulate('click')
    expect(Calculator.prototype.handleButtonClick.callCount).toBe(12)
    expect(wrapper.state('expression')).toBe('0123456789+-')

    const ButtonMultiply = wrapper.find('#ButtonMultiply')
    ButtonMultiply.simulate('click')
    expect(Calculator.prototype.handleButtonClick.callCount).toBe(13)
    expect(wrapper.state('expression')).toBe('0123456789+-*')

    const ButtonDivide = wrapper.find('#ButtonDivide')
    ButtonDivide.simulate('click')
    expect(Calculator.prototype.handleButtonClick.callCount).toBe(14)
    expect(wrapper.state('expression')).toBe('0123456789+-*/')
  })

  it('should erase the expression to be evaluated when the AC button is clicked', () => {
    sandbox.spy(Calculator.prototype, 'handleButtonClick')

    const wrapper = mount(<Calculator />)
    wrapper.setState({ expression: '2+2' })

    const ButtonAC = wrapper.find('#ButtonAC')
    ButtonAC.simulate('click')
    expect(Calculator.prototype.handleButtonClick.calledOnce).toBe(true)
    expect(wrapper.state('expression')).toBe('')
  })

  it('should delete a character from the expression to be evaluated when the CE button is clicked', () => {
    sandbox.spy(Calculator.prototype, 'handleButtonClick')

    const wrapper = mount(<Calculator />)
    wrapper.setState({ expression: '2+2' })

    const ButtonCE = wrapper.find('#ButtonCE')
    ButtonCE.simulate('click')
    expect(Calculator.prototype.handleButtonClick.calledOnce).toBe(true)
    expect(wrapper.state('expression')).toBe('2+')
  })

  it('should evaluate the expression when the = button is clicked', () => {
    sandbox.spy(Calculator.prototype, 'handleButtonClick')
    sandbox.spy(Calculator.prototype, 'evaluate')

    const wrapper = mount(<Calculator />)
    wrapper.setState({ expression: '2+2' })

    const ButtonEqual = wrapper.find('#ButtonEqual')
    ButtonEqual.simulate('click')
    expect(Calculator.prototype.handleButtonClick.calledOnce).toBe(true)
    expect(wrapper.state('expression')).toBe('4')

    wrapper.setState({ expression: '0++' })
    ButtonEqual.simulate('click')
    expect(Calculator.prototype.handleButtonClick.calledTwice).toBe(true)
    expect(wrapper.state('errorMessage')).toBeTruthy()
  })
})
