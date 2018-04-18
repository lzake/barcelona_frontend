import React, { Component } from 'react'
import axios from 'axios'
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Redirect,
//   Switch
// } from 'react-router-dom'
// import Quiz from './quiz/Quiz'

class Neighborhood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      neighborhood: this.props.match.params._id,
      neighborhoodData: []
    }
  }

  componentDidMount() {
    axios
      .get(
        `https://barcelona-back-end.herokuapp.com/${this.state.neighborhood}`
      )

      .then(response => {
        console.log(response)
        this.setState({ neighborhoodData: response.data }, state => {
          console.log(this.state)
        })
      })
  }
  render() {
    const neighborhood = this.state.neighborhoodData.map((neighborhood, i) => {
      return (
        <div>
          {/* Specific Neighborhood Information */}

          <h1>{neighborhood.place.information.name}</h1>
          <p>{neighborhood.place.information.description}</p>
          <img
            src={neighborhood.place.information.image}
            alt={neighborhood.place.information.name}
          />
        </div>
      )
    })
    return <div>{neighborhood}</div>
  }
}

export default Neighborhood
