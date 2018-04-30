import React, { Component } from 'react'
// import axios from 'axios'

class Neighborhood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: props.comments
    }
  }
  render() {
    return (
      <div>
        <h1>COMMENT COMPONENT</h1>
        {this.state.comments}
      </div>
    )
  }
}

export default Neighborhood
