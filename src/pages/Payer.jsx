import React, { Component } from 'react'
import Payersolution from '../containers/rxclaim/Payersolution'
import Footer from '../Components/Reuseable/Footer'

export class Payer extends Component {
  render() {
    return (
      <div>
        <Payersolution/>
        <Footer/>
      </div>
    )
  }
}

export default Payer
