import React from "react";
import "./Footer.css";

const LINKS = [
  {
    name: "twitter",
    link: "https://twitter.com/viktor_dunaev",
    style: "fab fa-twitter-square fa-3x"
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/geras.lord",
    style: "fab fa-facebook-square fa-3x"
  },
  {
    name: "vk",
    link: "https://vk.com/viva_belarus_mc",
    style: "fab fa-vk fa-3x"
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/viktordunaev",
    style: "fab fa-instagram fa-3x"
  }
];

class Footer extends React.Component {
  render() {
    const list = LINKS.map(function(LINKS) {
      return (
        <a
          href={LINKS.link}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-button-float"
        >
          <i className={LINKS.style} />
        </a>
      );
    });

    return <div>{list}</div>;
  }
}

export default Footer;
