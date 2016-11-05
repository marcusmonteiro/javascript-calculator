import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'
import Header from './header'
import Calculator from './calculator'
import Footer from './footer'

class App extends Component {
  render () {
    return (
      <Grid>
        <Row>
          <Header />
        </Row>
        <Row>
          <Calculator />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Grid>
    )
  }
}

export default App
