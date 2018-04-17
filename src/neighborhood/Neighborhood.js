import React, { Component } from 'react'
import axios from 'axios'

class Neighborhood extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h3>Hi, {this.props.quiz}</h3>
      </div>
    )
  }
}

export default Neighborhood
