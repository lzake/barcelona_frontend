import React, { Component } from 'react'
import axios from 'axios'
import './addComment.css'

class AddComment extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(e) {
    e.preventDefault()
    axios.post(
        'https://barcelona-back-end.herokuapp.com/' +
        this.props.match.params._id + '/add_comment',
        {
          name: e.target.name.value,
          comment: e.target.comment.value
        }
      )
      .then(res => console.log(res))
      .catch(error => {
        console.log(error)
    });

  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />

          <label htmlFor="comment">Comment</label>
          <input type="text" name="comment" />

          <input type="submit" value="submit" className="submitButton" />
        </form>
      </div>
    )
  }
}

export default AddComment
