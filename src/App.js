import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Neighborhood from './neighborhood/Neighborhood'
import Comments from './comments/Comments'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Quiz from './quiz/Quiz'

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
    console.log('here', this.state.info)
    const places = this.state.info.map((place, i) => {
      return (
        <div>
          {/* Information */}

          <h1>{place.place.information.name}</h1>
          <p>{place.place.information.description}</p>
          <img
            src={place.place.information.image}
            alt={place.place.information.name}
          />
        </div>
      )
    })

    const quizzes = this.state.info.map((place, i) => {
      return (
        <div>
          <h4>{place.place.information.name}</h4>
          <p>{place.place.quiz.q1.question}</p>
          <ul>
            <li>{place.place.quiz.q1.options[0]}</li>
            <li>{place.place.quiz.q1.options[1]}</li>
            <li>{place.place.quiz.q1.options[2]}</li>
          </ul>
          <p>{place.place.quiz.q2.question}</p>
          <ul>
            <li>{place.place.quiz.q1.options[0]}</li>
            <li>{place.place.quiz.q1.options[1]}</li>
            <li>{place.place.quiz.q1.options[2]}</li>
          </ul>
          <p>{place.place.quiz.q3.question}</p>
          <ul>
            <li>{place.place.quiz.q1.options[0]}</li>
            <li>{place.place.quiz.q1.options[1]}</li>
            <li>{place.place.quiz.q1.options[2]}</li>
          </ul>
        </div>
      )
    })

    // Creating links to specific id pages.
    const ids = this.state.info.map(place => {
      const path = `/${place._id}`
      console.log('THIS', path)
      return (
        <p>
          <Link to={path}>{place.place.information.name}</Link>
        </p>
      )
    })

    // const Child = ({ match }) => <div>{match.params.id}</div>
    // console.log(ids)
    // console.log({ places })
    return (
      <div>
        <nav>
          <h1>Go Abroad!</h1>
          {/* <Link to={`/`}>All dem hoods</Link> */}
          <p>{ids}</p>
        </nav>
        <Switch>
          <Route
            path="/:_id"
            render={props => {
              return <Neighborhood {...props} info={this.state.info} />
            }}
          />
          {/* <Route path="/:id" component={Child} /> */}
          {/* <Route
            path=":id/quiz"
            render={props => {
              return <Comments {...props} places={places} />
            }}
          /> */}
        </Switch>
      </div>
    )
  }
}

export default App
