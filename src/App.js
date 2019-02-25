import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./route";
import pages from "./pages/index";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main>
          <Switch>
            <Route exact path={ROUTES.posts} component={pages.Posts} />
            <Route path={ROUTES.feedback} component={pages.Feedback} />
            <Route path={ROUTES.aboutMe} component={pages.AboutMe} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
