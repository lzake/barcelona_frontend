import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

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
    console.log(this.state.info)
    const places = this.state.info.map((place, i) => {
      console.log(place.place.information.name)
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
    return (
      <div>
        <h1>{places}</h1>
      </div>
    )
  }
}

export default App
