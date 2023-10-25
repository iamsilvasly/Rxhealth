import React, { Component } from 'react'
import Crm1 from '../containers/Customer/Crm1'
import Footer from '../Components/Reuseable/Footer'

export class Crm extends Component {
  render() {
    return (
      <div>
        <Crm1/>
        <Footer/>
      </div>
    )
  }
}

export default Crm
