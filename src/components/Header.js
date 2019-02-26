import React, { Component } from "react";
import { ROUTES } from "../route";
import { Link } from 'react-router-dom'

const LINKS = {
  poetryPortal: ROUTES.posts,
  mainPage: ROUTES.posts,
  aboutMe: ROUTES.aboutMe,
  feedback: ROUTES.feedback
};

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container-fluid">
          <nav
            className="navbar navbar-inverse navbar-default"
            role="navigation"
          >
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  <span className="sr-only">Переключение навигации</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <Link className="navbar-brand" to={LINKS.poetryPortal}>
                  <u>Поэтический портал</u>
                </Link>
              </div>

              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav">
                  <li>
                    <Link to={LINKS.mainPage}>Главная</Link>
                  </li>
                  <li>
                    <Link to={LINKS.aboutMe}>Обо мне</Link>
                  </li>
                  <li>
                    <Link to={LINKS.feedback}>Отзыв</Link>
                  </li>
                </ul>
                <form className="navbar-form navbar-right" role="search">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Введите название..."
                    />
                  </div>
                  <button type="submit" className="btn btn-default">
                    Найти
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
