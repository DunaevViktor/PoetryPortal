import React, { Component } from "react";
import Footer from "./components/Footer";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./route";
import pages from "./pages/index";

class App extends Component {
  render() {
    return (
      <div className="app-body">
        <main className="app-content">
          <Switch>
            <Route exact path={ROUTES.posts} component={pages.Posts} />
            <Route path={ROUTES.feedback} component={pages.Feedback} />
            <Route path={ROUTES.aboutMe} component={pages.AboutMe} />
          </Switch>
        </main>
        <Footer className="app-footer" />
      </div>
    );
  }
}

export default App;
