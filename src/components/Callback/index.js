import React, { Component } from "react";
import Auth from "../Auth";

export default class Callback extends Component {
  componentDidMount() {
    const auth = new Auth();
    auth.handleAuthentication((path) => {
      this.props.history.push(path);
    });
  }

  render() {
    return (
      <div className="mt-32">
        <h1 className="block text-center text-3xl">Loading...</h1>
      </div>
    );
  }
}
