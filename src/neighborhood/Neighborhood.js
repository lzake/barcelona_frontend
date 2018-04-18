import React, { Component } from 'react'
import axios from 'axios'
// import Comment from './comment/Comment'
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Redirect,
//   Switch
// } from 'react-router-dom'

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
          console.log(this.state.neighborhoodData)
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

    const comments = this.state.neighborhoodData.map((neighborhood, i) => {
      return (
        <div className="comments">
          {neighborhood.place.comments.map(comment => {
            return (
              <div>
                <h2>{`Comments on ${neighborhood.place.information.name}`}</h2>
                <p>{comment.name}</p>
                <p>{comment.comment}</p>
                <p>{comment.timestamp}</p>
              </div>
            )
          })}
        </div>
      )
    })
    return (
      <div>
        {/* <p>{quiz}</p> */}
        {neighborhood}
        {comments}
      </div>
    )
  }
}

export default Neighborhood
