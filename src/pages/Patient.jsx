import React, { Component } from 'react'
import Healthker from '../containers/rxclaim/Healtkay/Healthker'
import Footer from '../Components/Reuseable/Footer'
export class Patient extends Component {
  render() {
    return (
      <div>
        <Healthker/>
        <Footer/>
      </div>
    )
  }
}

export default Patient
