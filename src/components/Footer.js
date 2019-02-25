import React from "react";
import "./Footer.css";

const LINKS = [
  {
    name: "twitter",
    link: "https://twitter.com/viktor_dunaev",
    style: "fab fa-twitter-square fa-3x",
    id: 0
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/geras.lord",
    style: "fab fa-facebook-square fa-3x",
    id: 1
  },
  {
    name: "vk",
    link: "https://vk.com/viva_belarus_mc",
    style: "fab fa-vk fa-3x",
    id: 2
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/viktordunaev",
    style: "fab fa-instagram fa-3x",
    id: 3
  }
];

class Footer extends React.Component {
  render() {
    const list = LINKS.map(function(LINKS) {
      return (
        <a
          key={LINKS.id}
          href={LINKS.link}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-button-float"
        >
          <i className={LINKS.style} />
        </a>
      );
    });

    return <footer>{list}</footer>;
  }
}

export default Footer;
