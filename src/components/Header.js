import React, { Component } from "react";
import "./Header.css";

const arrayOfLinks = {
  poetry_portal: "#",
  main_page: "#",
  about_me: "#",
  feedback: "#"
};

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <a className="navbar-brand" href={arrayOfLinks.poetry_portal}>
            Поэтический Портал
          </a>

          <div>
            <form action={arrayOfLinks.main_page}>
              <button
                className="navbar-toggler btn header-btn-main btn-light"
                type="submit"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Главная
              </button>
            </form>

            <form action={arrayOfLinks.about_me}>
              <button
                className="navbar-toggler btn header-btn-me btn-light"
                type="submit"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Обо мне
              </button>
            </form>

            <form action={arrayOfLinks.feedback}>
              <button
                className="navbar-toggler btn header-btn-feedback btn-light"
                type="submit"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Отзыв
              </button>
            </form>
          </div>

          <div
            className="collapse navbar-collapse header-div-serch"
            id="navbarSupportedContent"
          >
            <form className="form-inline my-2 my-lg-0 header-form-serch">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Введите название..."
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Найти
              </button>
            </form>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
