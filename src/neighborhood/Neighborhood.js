import React, { Component } from 'react'
import axios from 'axios'
import AddComment from '/Users/hannahaurand/wdi/projects/project_4/front_end/barcelona_fend/src/addComment/AddComment.js'
import { Link, Route, Switch } from 'react-router-dom'
import './Neighborhood.css'

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
        <div className="information" key={i}>
          {/* Specific Neighborhood Information */}

          <div className="Image">
            <img
              src={neighborhood.place.information.image}
              alt={neighborhood.place.information.name}
              className="neigh_image"
            />
          </div>
          <div className="details speech-bubble">
            <h1>{neighborhood.place.information.name}</h1>
            <p>{neighborhood.place.information.description}</p>
          </div>
        </div>
      )
    })

    const comments = this.state.neighborhoodData.map((neighborhood, i) => {
      return (
        <div className="comments" key={i}>
          {neighborhood.place.comments.map((comment, i) => {
            return (
              <div className="comments" key={i}>
                <h2>{`Comments on ${neighborhood.place.information.name}`}</h2>

                <Link to={`/${this.state.neighborhood}/add_comment`}>
                  Add Comment
                </Link>

                <p className="smallplz">{comment.name}</p>
                <p className="smallplz">{comment.timestamp}</p>
                <p className="comentBody">{comment.comment}</p>
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
        {/* <Route
            path={`${this.state.neighborhood}`}
            render={props => {
              return <AddComment />
            }}
          /> */}
        <Route
          path={`${this.props.match.path}/add_comment`}
          component={AddComment}
        />
      </div>
    )
  }
}

export default Neighborhood

//<Route path={`${match.path}/:subId`} component={Resource} />
