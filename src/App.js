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
            <Route exact path={ROUTES[0].link} component={pages.Posts} />
            <Route path={ROUTES[1].link} component={pages.AboutMe} />
            <Route path={ROUTES[2].link} component={pages.Feedback} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
