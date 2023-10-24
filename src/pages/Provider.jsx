import React, { Component } from 'react'
import Prosolution from '../containers/ProviderSolution/Prosolution'
import Footer from '../Components/Reuseable/Footer'

export class Provider extends Component {
  render() {
    return (
      <div>
        <Prosolution/>
        <Footer/>
      </div>
    )
  }
}

export default Provider
