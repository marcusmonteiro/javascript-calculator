import React, { Component } from 'react'
import math from 'mathjs'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { FlatButton, GridList, GridTile, Subheader } from 'material-ui'

const styles = {
  gridList: {
    width: 350
  }
}

export default class Calculator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expression: '',
      errorMessage: null
    }
    this.evaluate = this.evaluate.bind(this)
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
    const value = e
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
      expression: this.state.expression.concat(value)
    })
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <GridList cols={4} cellHeight={55} style={styles.gridList}>
            <Subheader>{this.state.expression}</Subheader>
            <Subheader>{this.state.errorMessage}</Subheader>
            <GridTile>
              <FlatButton id='ButtonAC' onClick={this.handleButtonClick.bind(this, 'AC')}>AC</FlatButton>
            </GridTile>
            <GridTile>
              <FlatButton id='ButtonCE' onClick={this.handleButtonClick.bind(this, 'CE')}>CE</FlatButton>
            </GridTile>
            <GridTile>
              <FlatButton id='ButtonDivide' onClick={this.handleButtonClick.bind(this, '/')}>/</FlatButton>
            </GridTile>
            <GridTile>
              <FlatButton id='ButtonMultiply' onClick={this.handleButtonClick.bind(this, '*')}>*</FlatButton>
            </GridTile>
            <GridTile>
              <FlatButton id='Button7' onClick={this.handleButtonClick.bind(this, '7')}>7</FlatButton>
            </GridTile>
            <GridTile>
              <FlatButton id='Button8' onClick={this.handleButtonClick.bind(this, '8')}>8</FlatButton>
            </GridTile>
            <GridTile>
              <FlatButton id='Button9' onClick={this.handleButtonClick.bind(this, '9')}>9</FlatButton>
            </GridTile>
            <GridTile>
              <FlatButton id='ButtonMinus' onClick={this.handleButtonClick.bind(this, '-')}>-</FlatButton>
            </GridTile>
            <GridTile>
              <FlatButton id='Button4' onClick={this.handleButtonClick.bind(this, '4')}>4</FlatButton>
            </GridTile>
            <GridTile>
              <FlatButton id='Button5' onClick={this.handleButtonClick.bind(this, '5')}>5</FlatButton>
            </GridTile>
            <GridTile>
              <FlatButton id='Button6' onClick={this.handleButtonClick.bind(this, '6')}>6</FlatButton>
            </GridTile>
            <GridTile>
              <FlatButton id='ButtonPlus' onClick={this.handleButtonClick.bind(this, '+')}>+</FlatButton>
            </GridTile>
            <GridTile>
              <FlatButton id='Button1' onClick={this.handleButtonClick.bind(this, '1')}>1</FlatButton>
            </GridTile>
            <FlatButton id='Button2' onClick={this.handleButtonClick.bind(this, '2')}>2</FlatButton>
            <GridTile>
              <FlatButton id='Button3' onClick={this.handleButtonClick.bind(this, '3')}>3</FlatButton>
            </GridTile>
            <GridTile>
              <FlatButton id='ButtonEqual' onClick={this.handleButtonClick.bind(this, '=')}>=</FlatButton>
            </GridTile>
            <GridTile>
              <FlatButton id='Button0' onClick={this.handleButtonClick.bind(this, '0')}>0</FlatButton>
            </GridTile>
            <GridTile>
              <FlatButton id='Button.' onClick={this.handleButtonClick.bind(this, '.')}>.</FlatButton>
            </GridTile>
          </GridList>
        </div>
      </MuiThemeProvider>
    )
  }
}
