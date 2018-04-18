// import React, { Component } from 'react'
// import axios from 'axios'
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Redirect,
//   Switch
// } from 'react-router-dom'

// class Quiz extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     const quizzes = this.props.info.map((place, i) => {
//       return (
//         <div>
//           <h4>{place.place.information.name}</h4>
//           <p>{place.place.quiz.q1.question}</p>
//           <ul>
//             <li>{place.place.quiz.q1.options[0]}</li>
//             <li>{place.place.quiz.q1.options[1]}</li>
//             <li>{place.place.quiz.q1.options[2]}</li>
//           </ul>
//           <p>{place.place.quiz.q2.question}</p>
//           <ul>
//             <li>{place.place.quiz.q1.options[0]}</li>
//             <li>{place.place.quiz.q1.options[1]}</li>
//             <li>{place.place.quiz.q1.options[2]}</li>
//           </ul>
//           <p>{place.place.quiz.q3.question}</p>
//           <ul>
//             <li>{place.place.quiz.q1.options[0]}</li>
//             <li>{place.place.quiz.q1.options[1]}</li>
//             <li>{place.place.quiz.q1.options[2]}</li>
//           </ul>
//         </div>
//       )
//     })
//     return <div>{quizzes}</div>
//   }
// }
