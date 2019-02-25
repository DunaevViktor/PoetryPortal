import React, { Component } from "react";
import { ROUTES } from "../route";

const LINKS = {
  poetryPortal: ROUTES.posts,
  mainPage: ROUTES.posts,
  aboutMe: ROUTES.aboutMe,
  feedback: ROUTES.feedback
};

class Header extends Component {
  render() {
    return (
      <header className="container-fluid">
        <nav className="navbar navbar-inverse navbar-default" role="navigation">
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
              <a className="navbar-brand" href={LINKS.poetryPortal}>
                <u>Поэтический портал</u>
              </a>
            </div>

            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li>
                  <a href={LINKS.mainPage}>Главная</a>
                </li>
                <li>
                  <a href={LINKS.aboutMe}>Обо мне</a>
                </li>
                <li>
                  <a href={LINKS.feedback}>Отзыв</a>
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
      </header>
    );
  }
}

export default Header;
