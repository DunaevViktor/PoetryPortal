import React, { Component } from "react";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Feedback from "./pages/Feedback";
import Posts from "./pages/Posts";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./route"

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path={ROUTES.posts} component={Posts} />
          <Route path={ROUTES.feedback} component={Feedback} />
          <Route path={ROUTES.aboutMe} component={AboutMe} />
        </Switch>
      </main>
    );
  }
}

export default App;
