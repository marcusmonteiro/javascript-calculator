import React, { Component } from 'react'
import math from 'mathjs'

export default class Calculator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expression: '',
      errorMessage: null
    }
    this.evaluate = this.evaluate.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  evaluate () {
    try {
      const expression = math.eval(this.state.expression).toString()
      this.setState({
        expression
      })
      this.eraseErrorMessage()
    } catch (e) {
      this.setState({
        errorMessage: 'Please correct your expression :-)'
      })
    }
  }

  eraseErrorMessage () {
    this.setState({
      errorMessage: null
    })
  }

  handleButtonClick (e) {
    this.eraseErrorMessage()
    const value = e.target.value
    if (value === 'AC') {
      this.setState({
        expression: ''
      })
      return
    }
    if (value === 'CE') {
      this.setState({
        expression: this.state.expression.slice(0, -1)
      })
      return
    }
    if (value === '=') {
      this.evaluate()
      return
    }
    this.setState({
      expression: this.state.expression.concat(e.target.value)
    })
  }

  render () {
    return (
      <div>
        <div>
          {this.state.expression}
        </div>
        <div>
          {this.state.errorMessage}
        </div>
        <div>
          <button id='ButtonAC' value='AC' onClick={this.handleButtonClick}>AC</button>
          <button id='ButtonCE' value='CE' onClick={this.handleButtonClick}>CE</button>
          <button id='ButtonDivide' value='/' onClick={this.handleButtonClick}>/</button>
          <button id='ButtonMultiply' value='*' onClick={this.handleButtonClick}>*</button>
          <button id='Button7' value='7' onClick={this.handleButtonClick}>7</button>
          <button id='Button8' value='8' onClick={this.handleButtonClick}>8</button>
          <button id='Button9' value='9' onClick={this.handleButtonClick}>9</button>
          <button id='ButtonMinus' value='-' onClick={this.handleButtonClick}>-</button>
          <button id='Button4' value='4' onClick={this.handleButtonClick}>4</button>
          <button id='Button5' value='5' onClick={this.handleButtonClick}>5</button>
          <button id='Button6' value='6' onClick={this.handleButtonClick}>6</button>
          <button id='ButtonPlus' value='+' onClick={this.handleButtonClick}>+</button>
          <button id='Button1' value='1' onClick={this.handleButtonClick}>1</button>
          <button id='Button2' value='2' onClick={this.handleButtonClick}>2</button>
          <button id='Button3' value='3' onClick={this.handleButtonClick}>3</button>
          <button id='ButtonEqual' value='=' onClick={this.handleButtonClick}>=</button>
          <button id='Button0' value='0' onClick={this.handleButtonClick}>0</button>
          <button id='Button.' value='.' onClick={this.handleButtonClick}>.</button>
        </div>
      </div>
    )
  }
}
