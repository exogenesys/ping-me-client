import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
import SignIn from "./components/SignIn";
import Channel from "./components/Channel";
import Home from "./components/Home";
import requireAuth from "./components/auth/requireAuth";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./actions";

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={SignIn} />
          <Route path="/channel/exhibitions-at-pragati-maidan" component={Channel} />
          <Route path="/app" component={requireAuth(ToDoList)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);
