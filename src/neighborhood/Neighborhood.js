import React, { Component } from 'react'
import axios from 'axios'
// import Quiz from './quiz/Quiz'

class Neighborhood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      neighborhood: this.props.match.params._id,
      neighborhoodData: {}
    }
  }

  componentDidMount() {
    axios
      .get(
        `https://barcelona-back-end.herokuapp.com/${this.state.neighborhood}`
      )
      .then(response => {
        console.log(response)
        this.setState({ neighborhoodData: response.data[0] })
      })
  }
  render() {
    // console.log(this.props)
    console.log(this.state)
    return (
      <div>
        <h1>{this.state.neighborhoodData.place.information.name}</h1>
      </div>
    )
  }
}

export default Neighborhood
