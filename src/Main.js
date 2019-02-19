import React, { Component } from "react";
import AboutMe from "./pages/AboutMe";
import Feedback from "./pages/Feedback";
import MainPosts from "./pages/MainPosts";
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={MainPosts} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/aboutme" component={AboutMe} />
        </Switch>
      </main>
    );
  }
}

export default Main;
