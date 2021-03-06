import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Neighborhood from './neighborhood/Neighborhood'
// import Comments from './comments/Comments'
import {
  // BrowserRouter as Router,
  Link,
  Route,
  // Redirect,
  Switch
} from 'react-router-dom'
// import Quiz from './quiz/Quiz'

class App extends Component {
  constructor() {
    super()
    this.state = {
      info: []
    }
  }

  componentDidMount() {
    axios.get('https://barcelona-back-end.herokuapp.com/').then(res => {
      this.setState({
        info: res.data
      })
    })
  }

  render() {
    // Creating links to specific id pages.
    const ids = this.state.info.map((place, i) => {
      const path = `/${place._id}`
      // console.log('THIS', path)
      return (
        <div className="clickable" key={i}>
          <p>
            <Link to={path}>{place.place.information.name}</Link>
          </p>
        </div>
      )
    })

    return (
      <div>
        <nav>
          <h1>Go Abroad!</h1>
          {ids}
        </nav>
        <Switch>
          <Route
            path="/:_id"
            render={props => {
              return <Neighborhood {...props} info={this.state.info} />
            }}
          />
        </Switch>
      </div>
    )
  }
}

export default App


// I'm trying to add comments from the front end and send them to the server to be added to the comments array within the Info model. The route should be /:id/add_comment within the Info.js controller.




// And from the front end the url where the user adds the comment is the id for the site/add_comment

// But I keep getting a 404 when I try to submit a new comment.