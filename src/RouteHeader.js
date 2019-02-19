import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
            <li>
              <Link to="/aboutme">About Me</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
