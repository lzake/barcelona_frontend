import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Neighborhood from './neighborhood/Neighborhood'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

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
      // console.log(this.state.info[0].place.information.name)
    })
  }

  render() {
    // console.log(this.state.info)
    const places = this.state.info.map((place, i) => {
      //console.log(place.place.quiz.q1)
      //console.log(this.state.info)
      //console.log(place.place.information)
      return (
        <div>
          <h1>{place.place.information.name}</h1>
          <p>{place.place.information.description}</p>
          <img
            src={place.place.information.image}
            alt={place.place.information.name}
          />
        </div>
      )
    })

    const quiz = this.state.info.map((place, i) => {
      return (
        <div>
          <p>{place.place.quiz.q1.question}</p>
          {/* <ul>
            <li>{place.quiz.q1.options[0]}</li>
            <li>{place.quiz.q1.options[1]}</li>
            <li>{place.quiz.options[2]}</li>
          </ul> */}
        </div>
      )
    })
    return (
      <div>
        <nav>
          <h1>Go Abroad!</h1>
          <Link to="/neighborhoods">Neighborhoods</Link>
        </nav>
        {/* <h1>{places}</h1> */}
        <Switch>
          <Route
            path="/neighborhoods"
            render={props => {
              return <Neighborhood {...props} places={places} quiz={quiz} />
            }}
          />
        </Switch>
      </div>
    )
  }
}

export default App
