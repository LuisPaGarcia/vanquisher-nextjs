import React from 'react'
import Navbar from '../NavBar'

export default function Wrapper(Page, ...props) {
  return class extends React.Component {
    render() {
      return (
        <>
          <Navbar />
          <Page />
        </>
      )
    }
  }
}
