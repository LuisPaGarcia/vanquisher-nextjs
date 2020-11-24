import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
  render() {
    return (
      <div className="pt-32">
        <h1 className="text-6xl text-center">404</h1>
        <br />
        <Link to="/">
          <button className="block mx-auto text-3xl bg-red-400 hover:bg-red-200 text-white font-bold p-6 rounded">
            Back to Home
          </button>
        </Link>
      </div>
    )
  }
}
