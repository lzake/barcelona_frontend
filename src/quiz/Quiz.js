import React, { Component } from 'react'
import axios from 'axios'

class Neighborhood extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>
          Some Information about {this.props.places.name}: {this.props.places}
        </h1>
        <p>{this.props.quizzes}</p>
      </div>
    )
  }
}

export default Neighborhood
