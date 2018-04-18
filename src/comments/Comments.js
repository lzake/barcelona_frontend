import React, { Component } from 'react'
import axios from 'axios'

class Neighborhood extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>COMMENT COMPONENT</h1>
        {comments}
      </div>
    )
  }
}

export default Neighborhood
